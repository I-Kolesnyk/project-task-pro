import { useState } from 'react';

import sprite from '../../assets/sprite.svg';
import Modal from 'components/ModalWindow/ModalWindow';
import AddColumnForm from 'components/AddColumnForm';
import { Button, Svg, Box } from './AddColumnButton.styled';

const AddColumnButton = () => {
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
          Add another column
        </Button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddColumnForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default AddColumnButton;
