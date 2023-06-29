import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import Logo from 'components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { useEffect } from 'react';
import { useAllBoards } from 'hooks';
import { getBoardById } from 'redux/board/operations';

function Sidebar({ setIsSidebarOpen }) {
  const dispatch = useDispatch();
  const isDesktop = window.screen.width;
 

  useEffect(() => {
    dispatch(getAllBoards());
  });

 

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
