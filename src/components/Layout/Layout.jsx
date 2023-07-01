import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import Loader from 'components/Loader';
import { useAllBoards, useIsBoardsLoading, useIsUserLoading } from 'hooks';
import { StyledMain } from './Layout.styled';
import { useNavToActiveBoard } from 'hooks/useNavToActivBoard';
import { getBackgrounds } from 'redux/background/operations';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const allBoards = useAllBoards();
  const isUserLoading = useIsUserLoading();
  const isLoading = useIsBoardsLoading();
  const { navigateToActive } = useNavToActiveBoard();

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

  useEffect(() => {
    navigateToActive();
  }, []);

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
