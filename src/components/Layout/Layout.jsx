import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { getBoardById } from 'redux/board/operations';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';

import Loader from 'components/Loader';
import {
  useAllBoards,
  useIsBoardsLoading,
  useIsUserLoading,
  useOneBoardLoading,
} from 'hooks';
import { StyledMain } from './Layout.styled';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBoards = useAllBoards();
  const isUserLoading = useIsUserLoading();
  const isLoading = useIsBoardsLoading();
  const isBoardLoading = useOneBoardLoading();

  const isDesktop = window.screen.width;

  console.log(allBoards);
  useEffect(() => {
    if (isDesktop > 1439) {
      setIsSidebarOpen(true);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
      // document.body.classList.toggle('no-scroll');
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // document.body.classList.remove('no-scroll');
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isUserLoading) {
      dispatch(getAllBoards());
    }
  }, [dispatch, isUserLoading]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  useEffect(() => {
    if (!isLoading) {
      if (allBoards.boards.length !== 0) {
        const activeBoard = allBoards.boards.filter(
          board => board.active === true
        );
        if (activeBoard.length === 0) {
          return;
        }
        if (activeBoard) {
          dispatch(getBoardById(`${activeBoard[0]._id}`));
          if (!isBoardLoading) {
            navigate(`${activeBoard[0].title}`);
          }
        }
      }
    }
  }, [allBoards.boards, dispatch, isBoardLoading, isLoading, navigate]);

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  return (
    !isLoading && (
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
        <ToastWrapper />
      </>
    )
  );
}

export default Layout;
