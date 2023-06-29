import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';

import Loader from 'components/Loader';
import { StyledMain } from './Layout.styled';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef();
  const dispatch = useDispatch();

  const isDesktop = window.screen.width;

  useEffect(() => {
    if (isDesktop > 1439) {
      setIsSidebarOpen(true);
    } else {
      // document.addEventListener('mousedown', handleClickOutside);
      // document.body.classList.toggle('no-scroll');
    }
    return () => {
      // document.removeEventListener('mousedown', handleClickOutside);
      // document.body.classList.remove('no-scroll');
    };
  }, [isDesktop]);



  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // const handleClickOutside = e => {
  //   if (!myRef.current.contains(e.target)) {
  //     setIsSidebarOpen(false);
  //   }
  // };

  return (
    <>
      <Header openSidebar={openSidebar} />
      <div ref={myRef}>
        {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      </div>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
}

export default Layout;
