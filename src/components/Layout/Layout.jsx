import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import Loader from 'components/Loader';
import { StyledMain } from './Layout.styled';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef(null);
  const [size, setSize] = useState({});

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = myRef.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (size.clientWidth > 1439) {
      setIsSidebarOpen(true);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [size.clientWidth]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleClickOutside = e => {
    const modal = document.getElementById('modal-root');
    if (!myRef.current.contains(e.target) && !modal.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  return (    
      <>
        <Header openSidebar={openSidebar} />
        <div ref={myRef}>
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />
        </div>
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledMain>
        <ToastWrapper />
      </>  
  );
}

export default Layout;
