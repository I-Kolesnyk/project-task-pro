import { useState } from 'react';
import { useAllBoards, useIsBoardsLoading } from 'hooks';

import {
  HomePageContainer,
  HomePageText,
  HomePageCreateBoardBtn,
} from './styled/HomePage.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import CreateNewBoard from 'components/NewBoardForm/NewBoardForm';
import Loader from 'components/Loader/Loader';

function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const isLoading = useIsBoardsLoading();
  const boards = useAllBoards();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && boards.length === 0 ? (
        <>
          <HomePageContainer>
            <HomePageText>
              Before starting your project, it is essential&nbsp;
              <HomePageCreateBoardBtn onClick={openModal}>
                to create a board
              </HomePageCreateBoardBtn>
              &nbsp; to visualize and track all the necessary tasks and
              milestones. This board serves as a powerful tool to organize the
              workflow and ensure effective collaboration among team members.
            </HomePageText>
          </HomePageContainer>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreateNewBoard onClose={closeModal} />
            </Modal>
          )}
        </>
      ) : (
        <>
          <HomePageContainer>
            <HomePageText>
              Open your board or click &nbsp;
              <HomePageCreateBoardBtn onClick={openModal}>
                to create a board
              </HomePageCreateBoardBtn>
              &nbsp;.
            </HomePageText>
          </HomePageContainer>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreateNewBoard onClose={closeModal} />
            </Modal>
          )}
        </>
      )}
      ;
    </>
  );
}

export default HomePage;
