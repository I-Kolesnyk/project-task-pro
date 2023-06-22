import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import BoardScreen from 'components/BoardScreen';

import { StyledMain } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <StyledMain>
        <BoardScreen />
      </StyledMain>
    </>
  );
}

export default Layout;
