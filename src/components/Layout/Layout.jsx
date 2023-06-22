import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { StyledMain } from './Layout.styled';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isDesktop = window.screen.width;

  console.log(isDesktop);

  useEffect(() => {
    if (isDesktop > 1439) {
      setIsSidebarOpen(true);
    }
  }, [isDesktop]);

  const openSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Header openSidebar={openSidebar} />
      {isSidebarOpen && <Sidebar />}   
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
}

export default Layout;
