import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';

function Sidebar() {
  return (
    <StyledSidebar>
      <BoardList />
      <NeedHelp />
      <LogoutBtn />
    </StyledSidebar>
  );
}

export default Sidebar;
