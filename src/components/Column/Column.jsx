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
import { selectFilter } from 'redux/filter/selectors';
import sprite from '../../assets/sprite.svg';
import SvgComponent from 'components/SvgComponent/SvgComponent';
import { useSelector } from 'react-redux';

const icons = ['#pencil', '#trash'];

function Column({ columnTitle, columnId, cards, prefix }) {
  const filter = useSelector(selectFilter);

  const filteredCards = (tasks, filter) => {
    if (!tasks.every(task => task.hasOwnProperty('index'))) {
      return;
    }
    if (filter === 'all') return tasks;
    const sortedCards = tasks.sort((a, b) => a.index - b.index);
    const filteredCards = sortedCards.filter(card => card.priority === filter);
    return filteredCards;
  };

  return (
    <Wrapper>
      <ColumnTitle>
        <p>{columnTitle}</p>
        <IconList>
          {icons.map(icon => (
            <li key={icon}>
              <IconButton>
                <SvgComponent
                  w={'16px'}
                  h={'16px'}
                  sprite={sprite}
                  icon={icon}
                />
              </IconButton>
            </li>
          ))}
        </IconList>
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
