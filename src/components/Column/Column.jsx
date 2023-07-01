import { Droppable } from '@hello-pangea/dnd';
import Card from 'components/Card';
import AddCardButton from 'components/AddCardButton/AddCardButton';
import {
  Wrapper,
  TaskList,
  ColumnTitle,
  IconList,
  IconButton,
} from './Column.styled';
import { selectFilter } from 'redux/filter/selectors';
import sprite from '../../assets/sprite.svg';
import SvgComponent from 'components/SvgComponent/SvgComponent';
import { useSelector } from 'react-redux';
const icons = ['#pencil', '#trash'];

function Column({ columnTitle, columnId, cards, prefix }) {
  const filter = useSelector(selectFilter);
  console.log('cards in column -->', cards);

  const filteredCards = (cards, filter) => {
    if (filter === 'all') return cards;
    const filteredCards = cards.filter(card => card.priority === filter);
    console.log('filtered cards -->', filteredCards);
    return filteredCards;
  };
  // .filter(card => card.priority === ? all
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

      <Droppable droppableId={`${prefix}`}>
        {provided => (
          <TaskList {...provided.droppableProps} ref={provided.innerRef}>
            {cards &&
              filteredCards(cards, filter).length > 0 &&
              filteredCards(cards, filter).map((card, index) => (
                <Card index={index} item={card} key={card._id} />
              ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <AddCardButton columnId={columnId} />
    </Wrapper>
  );
}

export default Column;
