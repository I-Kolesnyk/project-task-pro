import { useState } from 'react';

import {
  HomePageContainer,
  HomePageText,
  HomePageCreateBoardBtn,
} from './styled/HomePage.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import CreateNewBoard from 'components/NewBoardForm/NewBoardForm';

function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <HomePageContainer>
        <HomePageText>
          Before starting your project, it is essential&nbsp;
          <HomePageCreateBoardBtn onClick={openModal}>
            to create a board
          </HomePageCreateBoardBtn>
          &nbsp; to visualize and track all the necessary tasks and milestones.
          This board serves as a powerful tool to organize the workflow and
          ensure effective collaboration among team members.
        </HomePageText>
      </HomePageContainer>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CreateNewBoard onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default HomePage;
