import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { StyledMain } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
}

export default Layout;
