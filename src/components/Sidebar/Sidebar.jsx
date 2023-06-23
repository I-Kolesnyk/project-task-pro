import BoardList from 'components/BoardList';
import { StyledSidebar } from './Sidebar.styled';
import NeedHelp from 'components/NeedHelp/NeedHelp';

function Sidebar() {
  return (
    <StyledSidebar>
      <BoardList />
      <NeedHelp />
    </StyledSidebar>
  );
}

export default Sidebar;
