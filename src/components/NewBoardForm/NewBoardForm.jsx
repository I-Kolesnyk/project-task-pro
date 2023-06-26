import React, { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import data from '../../assets/backgroundIcon/data';
import { useForm } from 'react-hook-form';

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
} from './NewBoardForm.styled';

const NewBoardForm = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

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
      'star-04',
      'loading-03',
      'puzzle-piece-02',
      'container',
      'lightning-02',
      'colors',
      'hexagon-01',
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
      <NewBoardTitle>New Board</NewBoardTitle>
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
          textBtn={() => <ChildComponent textContent="Create" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewBoardForm;
