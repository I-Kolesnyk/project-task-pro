import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import Logo from 'components/Logo/Logo';

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <BoardList />
      <NeedHelp />
      <LogoutBtn />
    </StyledSidebar>
  );
}

export default Sidebar;
