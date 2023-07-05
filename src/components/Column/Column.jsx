import { Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from 'components/Card';
import AddCardButton from 'components/AddCardButton/AddCardButton';
import { filterCards } from 'Helpers/filterCards';
import EditColumnForm from 'components/EditColumnForm/EditColumnForm';
import Modal from 'components/ModalWindow/ModalWindow';

import { deleteColumn } from 'redux/board/operations';
import {
  Wrapper,
  TaskList,
  ColumnTitle,
  IconList,
  IconButton,
  Container,
} from './Column.styled';
import sprite from '../../assets/sprite.svg';
import SvgComponent from 'components/SvgComponent/SvgComponent';
import { useFilter } from 'hooks';

function Column({ columnTitle, columnId, cards, prefix }) {
  const filter = useFilter();
  const filteredCards = filterCards(cards, filter);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <ColumnTitle>
        <p>{columnTitle}</p>
        <IconList>
          <li>
            <IconButton onClick={openModal}>
              <SvgComponent
                w={'16px'}
                h={'16px'}
                sprite={sprite}
                icon={'#pencil'}
              />
            </IconButton>
          </li>
          <li>
            <IconButton onClick={() => dispatch(deleteColumn(columnId))}>
              <SvgComponent
                w={'16px'}
                h={'16px'}
                sprite={sprite}
                icon={'#trash'}
              />
            </IconButton>
          </li>
        </IconList>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditColumnForm
            columnId={columnId}
            columnTitle={columnTitle}
            onClose={closeModal}
          />
        </Modal>
      </ColumnTitle>
      <Container>
        <Droppable droppableId={`${prefix}`}>
          {provided => (
            <TaskList {...provided.droppableProps} ref={provided.innerRef}>
              {cards &&
                filteredCards.length > 0 &&
                filteredCards.map((card, index) => (
                  <Card index={index} item={card} key={card._id} />
                ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
      <AddCardButton columnId={columnId} />
    </Wrapper>
  );
}

export default Column;
