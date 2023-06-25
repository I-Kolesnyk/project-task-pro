import React, { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import data from '../../assets/backgroundIcon/data';

import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import OnClickBtn from 'components/FormBtn/OnClickBtn';

import {
  ModalTitle,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  BgIcon,
  BackgroundItem,
  BackgroundImage,
  Input,
} from './NewBoard.styled';

const CreateNewBoard = () => {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
  };

  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
  };

  const handleCreateBoard = () => {
    console.log('Title:', title);
    console.log('Selected Icon:', selectedIcon);
    console.log('Selected Background Id:', selectedBackgroundId);
    setTitle('');
    setSelectedIcon('');
    setSelectedBackgroundId('');
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
      <ModalTitle>New Board</ModalTitle>
      <label htmlFor="newBoardInput"></label>
      <Input
        id="newBoardInput"
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />

      <IconTitle>Icons</IconTitle>
      <IconWrap>{renderIcons()}</IconWrap>

      <BackgroundTitle>Background</BackgroundTitle>
      <BgIcon>{renderBackgrounds()}</BgIcon>

      <OnClickBtn
        textBtn={() => <ChildComponent textContent="Create" />}
        onClick={handleCreateBoard}
      />

      {/* <button onClick={handleCreateBoard}>Create</button> */}
    </div>
  );
};

export default CreateNewBoard;
