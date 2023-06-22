import { useState } from 'react';

import sprite from '../../assets/sprite.svg';
import { Wrapper, Text, Button, Svg } from './AddBoardButton.styled';

function AddBoardButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
    <Wrapper>
      <Text>Create a new board</Text>
      <Button type="button" onClick={openModal}>
        <Svg width="20px" height="20px">
          <use href={sprite + '#plus'}></use>
        </Svg>
      </Button>
    </Wrapper>
    {isModalOpen && (
        <p>модалка для створення дошки</p>
        // <Modal setIsModalOpen={setIsModalOpen}>
        //   {/* <AddBoardModal /> */}
        // </Modal>
      )}
    </>
  );
}

export default AddBoardButton;
