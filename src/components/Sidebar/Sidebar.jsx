import BoardList from 'components/BoardList/BoardList';
import { StyledSidebar, Container } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import Logo from 'components/Logo/Logo';

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar className={isOpen ? 'isOpen' : null}>
      <Container>
        <Logo />
        <BoardList />
        <NeedHelp />

        <LogoutBtn />
      </Container>
    </StyledSidebar>
  );
}

export default Sidebar;
