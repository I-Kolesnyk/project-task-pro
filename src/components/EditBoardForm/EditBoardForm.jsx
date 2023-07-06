import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { editBoardById } from 'redux/allBoards/operations';
import sprite from '../../assets/sprite.svg';
import data from '../../assets/backgroundIcon/data';
import { useBoardData } from 'hooks';
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
  const navigate = useNavigate();
  const board = useBoardData();

  useEffect(() => {
    setValue('title', board.title);
    setSelectedIcon(board.icon);
    setSelectedBackgroundId(board.background);
  }, [board.background, board.icon, board.title, setValue]);

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
      boardId: board._id,
      body: {
        title: data.title,
        icon: data.selectedIcon,
        background: data.selectedBackgroundId,
      },
    };

    dispatch(editBoardById(boardData))
      .unwrap()
      .then(response => {
        setValue('title', data.title);
        setValue('selectedIcon', data.selectedIcon);
        setValue('selectedBackgroundId', data.selectedBackgroundId);
        onClose();
      })
      .catch(error => {
        console.error('Error:', error);
      });

    navigate(`${data.title.toLowerCase()}`);
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
