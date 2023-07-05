import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import sprite from '../../assets/sprite.svg';
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

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    } else {
      document.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    }
    return () => {
      document.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <ModalOverlay onClick={handleBackdropClick}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent>
            <CloseButton className="modal-close" onClick={handleClose}>
              <use href={`${sprite}#x-close`} />
            </CloseButton>
            {children}
          </ModalContent>
        </motion.div>
      </ModalOverlay>
    </AnimatePresence>,
    document.getElementById('modal-root')
  );
};

export default Modal;
