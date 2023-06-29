import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import Logo from 'components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { useEffect } from 'react';
import { useAllBoards, useUserId } from 'hooks';
import { getBoardById } from 'redux/board/operations';
import { useState } from 'react';

function Sidebar({ setIsSidebarOpen }) {
  const dispatch = useDispatch();
  const isDesktop = window.screen.width;
  const user = useUserId();
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user) {
      setIsUser(true);
    }
  }, [user]);

  useEffect(() => {
    console.log(isUser);
    if (isUser) {
      console.log("i get all boards")
      dispatch(getAllBoards());
    }
  }, [dispatch, isUser]);

  const handleClose = () => {
    setIsSidebarOpen(false);
  };
  return (
    <StyledSidebar>
      {isDesktop < 1439 && (
        <button type="button" onClick={handleClose}>
          Close
        </button>
      )}

      <Logo />
      <BoardList />
      <NeedHelp />
      <LogoutBtn />
    </StyledSidebar>
  );
}

export default Sidebar;
