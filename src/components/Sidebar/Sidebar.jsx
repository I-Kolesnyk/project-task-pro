import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

function Sidebar() {
  return (
    <StyledSidebar>
      <BoardList />
      <LogoutBtn />
    </StyledSidebar>
  );
}

export default Sidebar;
