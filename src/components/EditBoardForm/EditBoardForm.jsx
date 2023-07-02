import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editBoardById } from 'redux/allBoards/operations';
import sprite from '../../assets/sprite.svg';
import data from '../../assets/backgroundIcon/data';
import { useForm } from 'react-hook-form';
import { useAllBoards } from 'hooks/useAllBoards';

import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import FormBtn from 'components/FormBtn/FormBtn';

import {
  NewBoardTitle,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  BgIcon,
  BackgroundItem,
  BackgroundImage,
  Input,
} from './EditBoardForm.styled';

const EditBoardForm = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const dispatch = useDispatch();

  const allBoards = useAllBoards();
  const activeBoardId = allBoards.find(board => board.active === true);

  useEffect(() => {
    setValue('title', activeBoardId.title);
    setSelectedIcon(activeBoardId.icon);
    setSelectedBackgroundId(activeBoardId.background);
  }, [activeBoardId, setValue]);

  const handleTitleChange = event => {
    setValue('title', event.target.value);
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('selectedIcon', icon);
  };

  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
    setValue('selectedBackgroundId', backgroundId);
  };

  const handleEditBoardForm = data => {
    const boardData = {
      boardId: activeBoardId._id,
      body: {
        title: data.title,
        icon: data.selectedIcon,
        background: data.selectedBackgroundId,
      },
    };

    dispatch(editBoardById(boardData))
      .unwrap()
      .then(response => {
        console.log('Обновленные данные:', response);
        setValue('title', data.title);
        setValue('selectedIcon', data.selectedIcon);
        setValue('selectedBackgroundId', data.selectedBackgroundId);
        onClose();
      })
      .catch(error => {
        console.error('Ошибка при обновлении:', error);
      });
  };

  const renderIcons = () => {
    const icons = [
      'Project',
      'star',
      'loading',
      'puzzle-piece',
      'container',
      'lightning',
      'colors',
      'hexagon',
    ];

    return icons.map(icon => (
      <Icon
        key={icon}
        selected={selectedIcon === icon}
        onClick={() => handleIconSelect(icon)}
      >
        <use href={`${sprite}#${icon}`} />
      </Icon>
    ));
  };

  const renderBackgrounds = () => {
    return data.map(item => (
      <BackgroundItem
        key={item.id}
        isActive={selectedBackgroundId === item.id}
        onClick={() => handleBackgroundSelect(item.id)}
      >
        <BackgroundImage src={item.image} alt="Background" />
      </BackgroundItem>
    ));
  };

  return (
    <div>
      <NewBoardTitle>Edit Board</NewBoardTitle>
      <form onSubmit={handleSubmit(handleEditBoardForm)}>
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title')}
          onChange={handleTitleChange}
        />

        <IconTitle>Icons</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>

        <BackgroundTitle>Background</BackgroundTitle>
        <BgIcon>{renderBackgrounds()}</BgIcon>

        <FormBtn
          textBtn={() => <ChildComponent textContent="Edit" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default EditBoardForm;
