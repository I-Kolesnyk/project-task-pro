import BoardList from 'components/BoardList';
import { StyledSidebar, SidebarContainer } from './Sidebar.styled';

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <SidebarContainer> */}
        <BoardList />
      {/* </SidebarContainer> */}
    </StyledSidebar>
  );
}

export default Sidebar;
