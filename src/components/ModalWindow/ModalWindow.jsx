import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import sprite from '../../sprite/sprite.svg';

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
} from 'components/ModalWindow/ModalWindow.styled';

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton className="modal-close" onClick={handleClose}>
          <use href={`${sprite}#x-close`} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

//================================================
// пример использования
//================================================

// const ModalWindow = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Открыть модальное окно</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <h2>Модальное окно</h2>
//       </Modal>
//     </div>
//   );
// };

export default Modal;
