import { useState } from 'react';
import { Button, Svg, Box } from './AddCardButton.styled';
import sprite from '../../assets/sprite.svg';
import AddCardForm from 'components/AddCardForm';
import Modal from 'components/ModalWindow/ModalWindow';

const AddCardButton = ({ columnId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <Button onClick={openModal}>
          <Box>
            <Svg>
              <use href={sprite + '#plus'}></use>
            </Svg>
          </Box>
          Add another card
        </Button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddCardForm onClose={closeModal} columnId={columnId} />
        </Modal>
      )}
    </>
  );
};

export default AddCardButton;
