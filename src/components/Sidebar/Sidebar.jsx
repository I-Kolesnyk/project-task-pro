import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';

function Sidebar() {
  return (
    <StyledSidebar>
      <BoardList />
    </StyledSidebar>
  );
}

export default Sidebar;
