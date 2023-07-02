import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import Loader from 'components/Loader';
import { useIsBoardsLoading, useIsUserLoading } from 'hooks';
import { StyledMain } from './Layout.styled';

import { getBackgrounds } from 'redux/background/operations';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const isUserLoading = useIsUserLoading();
  const isLoading = useIsBoardsLoading();

  const isDesktop = window.screen.width;

  useEffect(() => {
    if (isDesktop > 1439) {
      setIsSidebarOpen(true);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isUserLoading) {
      dispatch(getAllBoards());
      dispatch(getBackgrounds());
    }
  }, [dispatch, isUserLoading]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // if (!isLoading) {
  //   if (allBoards.length !== 0) {
  //     const activeBoard = allBoards.find(board => board.active === true);
  //     if (!activeBoard) {
  //       return;
  //     }

  //     if (activeBoard) {
  //       console.log(activeBoard);
  //       if (!isBoardLoading) {
  //         return <Navigate to={activeBoard.title} replace />;
  //       }
  //     }
  //   }
  // }

  const handleClickOutside = e => {
    const modal = document.getElementById('modal-root');
    if (!myRef.current.contains(e.target) && !modal.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  return (
    !isLoading && (
      <>
        <Header openSidebar={openSidebar} />
        <div ref={myRef}>{isSidebarOpen && <Sidebar />}</div>
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledMain>
        <ToastWrapper />
      </>
    )
  );
}

export default Layout;
