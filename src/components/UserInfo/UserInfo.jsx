import { useEffect, useState } from 'react';

import { useTheme, useUserAvatar, useUserName } from 'hooks';
import { Img, Text, Wrapper } from './UserInfo.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import EditProfileForm from 'components/EditProfileFrorm/EditProfileForm';

const UserInfo = () => {
  const darkAvatar = 'https://i.ibb.co/JcrFKvs/user-dark.png';
  const ligthAvatar = 'https://i.ibb.co/NWzn0rN/user-light.png';
  const violetAvatar = 'https://i.ibb.co/Ss8X2KP/user-violet.png';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState(darkAvatar);

  const userName = useUserName();
  const userAvatarGet = useUserAvatar();
  const theme = useTheme();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const userAvatarDefaultTheme = theme => {
    let defaultAvatar;

    switch (theme) {
      case 'dark':
        defaultAvatar = darkAvatar;
        break;
      case 'light':
        defaultAvatar = ligthAvatar;
        break;
      case 'violet':
        defaultAvatar = violetAvatar;
        break;
      default:
        defaultAvatar = darkAvatar;
    }
    return defaultAvatar;
  };

  useEffect(() => {
    const avatar = userAvatarDefaultTheme(theme);

    if (userAvatarGet === 'https://i.ibb.co/7VFWmkN/user2x-min.png') {
      return setUserAvatar(avatar);
    } else {
      return setUserAvatar(userAvatarGet);
    }
  }, [theme, userAvatarGet]);

  return (
    <Wrapper>
      <Text>{userName}</Text>
      <button onClick={openModal}>
        <Img src={userAvatar} alt="user-avatar" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditProfileForm userAvatar={userAvatar} onClose={closeModal} />
      </Modal>
    </Wrapper>
  );
};
export default UserInfo;
