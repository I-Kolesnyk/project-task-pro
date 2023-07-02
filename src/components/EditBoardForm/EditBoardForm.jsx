import React, { useState, useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import data from '../../assets/backgroundIcon/data';
import { useForm } from 'react-hook-form';
import { useAllBoards } from 'hooks/useAllBoards';
import { getBackgrounds } from 'redux/background/operations';

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

  const Backgrounds = getBackgrounds();

  console.log('Backgrounds------------------->', Backgrounds);

  const allBoards = useAllBoards();
  const activeBoardId = allBoards.find(board => board.active === true);

  useEffect(() => {
    console.log('activeBoard_ID =====>', activeBoardId);
    setValue('title', activeBoardId.title);
    console.log('activeBoard_title =====>', activeBoardId.title);
    setValue('selectedIcon', activeBoardId.icon);
    console.log('activeBoard_icon =====>', activeBoardId.icon);
    // setValue('selectedBackgroundId', activeBoardId.background);
    console.log('activeBoard_BG =====>', activeBoardId.background);
  }, [activeBoardId, allBoards, setValue]);

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

  const handleCreateBoard = data => {
    console.log('Title:', data.title);
    console.log('Selected Icon:', data.selectedIcon);
    console.log('Selected Background Id:', data.selectedBackgroundId);
    setValue('title', '');
    setValue('selectedIcon', '');
    setValue('selectedBackgroundId', '');
    onClose();
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
      <form onSubmit={handleSubmit(handleCreateBoard)}>
        {/* <label htmlFor="newBoardInput">Title</label> */}
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
