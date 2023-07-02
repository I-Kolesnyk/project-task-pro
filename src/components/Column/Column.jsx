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
const icons = ['#pencil', '#trash'];

function Column({ columnTitle, columnId, cards, prefix }) {
  const filter = useFilter();

  const filteredCards = (tasks, filter) => {
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
