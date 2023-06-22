import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { StyledMain } from './Layout.styled';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef();

  const isDesktop = window.screen.width;

  console.log(isDesktop);

  useEffect(() => {
    if (isDesktop > 1439) {
      setIsSidebarOpen(true);
    } else {
      console.log('fff');
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.toggle('no-scroll');
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('no-scroll');
    };
  }, [isDesktop]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <Header openSidebar={openSidebar} />
      <div ref={myRef}>{isSidebarOpen && <Sidebar />}</div>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
}

export default Layout;
