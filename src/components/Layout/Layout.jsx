import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/allBoards/operations';
import { getBoardById } from 'redux/board/operations';

import Loader from 'components/Loader';
import { useUserId, useAllBoards, useBoard } from 'hooks';
import { StyledMain } from './Layout.styled';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useUserId();
  const allBoards = useAllBoards();
  const oneBoard = useBoard();
  const [isUser, setIsUser] = useState(false);
  const [isBoards, setIsBoards] = useState(false);
  const [isBoard, setIsBoard] = useState(false);

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

  useEffect(() => {
    if (user) {
      setIsUser(true);
    }
  }, [user]);

  useEffect(() => {  
    if (isUser) {
      dispatch(getAllBoards());
    }
  }, [dispatch, isUser]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  useEffect(() => {
    if (allBoards.boards.length !== 0) {
      setIsBoards(true);
    }
  }, [allBoards.boards.length]);

  useEffect(() => {
    if (isBoards) {   
      if (allBoards.boards.length !== 0) {
        const activeBoard = allBoards.boards.filter(
          board => board.active === true
        );       
        if (activeBoard.length === 0) {
          return;
        }
        if (activeBoard) {
          dispatch(getBoardById(`${activeBoard[0]._id}`));
          navigate(`${activeBoard[0].title}`);
        }
      }
    }
  }, [allBoards.boards, dispatch, isBoards, navigate]);

  // const handleClickOutside = e => {
  //   if (!myRef.current.contains(e.target)) {
  //     setIsSidebarOpen(false);
  //   }
  // };

  useEffect(() => {
    if (oneBoard.board) {
      setIsBoard(true);
    }
  }, [oneBoard.board, setIsBoard]);

  return (
    isBoards && isBoard && (
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
    )
  );
}

export default Layout;
