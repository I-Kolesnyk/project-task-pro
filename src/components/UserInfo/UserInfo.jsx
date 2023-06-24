import { useUserName } from 'hooks';
import { useState } from 'react';
import { Img, Text, Wrapper } from './UserInfo.styled';

const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = useUserName();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const userFirstAvatar = (
    <picture>
      <source srcSet="https://i.ibb.co/jLbPt1s/user-min.png 1x, https://i.ibb.co/7VFWmkN/user2x-min.png 2x" />
      <Img
        src="https://i.ibb.co/jLbPt1s/user-min.png"
        alt="user-avatar"
        border="0"
      />
    </picture>
  );

  return (
    <Wrapper>
      <Text>{userName} User Name Example</Text>
      <button onClick={openModal}>{userFirstAvatar}</button>
      {isModalOpen && <p>Модалка user info</p>}
    </Wrapper>
  );
};
export default UserInfo;
