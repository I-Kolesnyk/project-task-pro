import { useUserAvatar, useUserName } from 'hooks';
import { useState } from 'react';
import { Img, Text, Wrapper } from './UserInfo.styled';
import Modal from 'components/ModalWindow/ModalWindow';

const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userName = useUserName();
  const userAvatar = useUserAvatar();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Text>{userName} User Name Example</Text>
      <button onClick={openModal}>
        <Img src={userAvatar} alt="user-avatar" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Модальное окно</h2>
      </Modal>
    </Wrapper>
  );
};
export default UserInfo;
