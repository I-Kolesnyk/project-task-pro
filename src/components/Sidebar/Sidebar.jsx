import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import Logo from 'components/Logo/Logo';

function Sidebar({ setIsSidebarOpen }) {
  const isDesktop = window.screen.width;
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
