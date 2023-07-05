import { useState } from 'react';

import { Filters, FilterIcon } from './Filter.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import FilterModal from './FilterModal/FilterModal';
import sprite from '../../assets/sprite.svg';

const Filter = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Filters type="button" onClick={openModal}>
        <FilterIcon>
          <use href={sprite + '#filter'}></use>
        </FilterIcon>
        <span>Filters</span>
      </Filters>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FilterModal onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Filter;
