import { useState } from 'react';
import { useDispatch } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import Modal from 'components/ModalWindow/ModalWindow';
import CreateNewBoard from 'components/NewBoard/NewBoard';

import { Wrapper, Text, Button, Svg } from './AddBoardButton.styled';

function AddBoardButton({ setIsSidebarOpen }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CreateNewBoard onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default AddBoardButton;
