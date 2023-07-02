import { Droppable } from '@hello-pangea/dnd';
import Card from 'components/Card';
import AddCardButton from 'components/AddCardButton/AddCardButton';
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
import EditColumnForm from 'components/EditColumnForm/EditColumnForm';
import Modal from 'components/ModalWindow/ModalWindow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'redux/board/operations';

function Column({ columnTitle, columnId, cards, prefix }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filter = useFilter();
  const dispatch = useDispatch();

  console.log('cards --> ', cards.length);
  cards.forEach(task => console.log(task.hasOwnProperty('index')));

  const filteredCards = (tasks, filter) => {
    if (filter === 'all') return tasks;
    const sortedCards = tasks.sort((a, b) => a.index - b.index);
    const filteredCards = sortedCards.filter(card => card.priority === filter);
    return filteredCards;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <EditColumnForm columnId={columnId} columnTitle={columnTitle} />
        </Modal>
      </ColumnTitle>
      <Container>
        <Droppable droppableId={`${prefix}`}>
          {provided => (
            <TaskList {...provided.droppableProps} ref={provided.innerRef}>
              {cards.length > 0 &&
                filteredCards(cards, filter).map((card, index) => {
                  card.index = index;

                  return <Card index={index} item={card} key={card._id} />;
                })}
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
