import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={<div>Loaging...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
