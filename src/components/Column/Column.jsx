import { Droppable } from '@hello-pangea/dnd';
import Card from 'components/Card';
import AddCardButton from 'components/AddCardButton/AddCardButton';
import {
  Wrapper,
  TaskList,
  TaskTitle,
  IconList,
  Svg,
  IconButton,
} from './Column.styled';
import sprite from '../../assets/sprite.svg';

function Column({ columnTitle, columnId, cards, prefix }) {
  return (
    <Wrapper>
      <TaskTitle>
        <span>{columnTitle}</span>
        <IconList>
          <li>
            <IconButton>
              <Svg>
                <use href={sprite + '#pencil'}></use>
              </Svg>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Svg>
                <use href={sprite + '#trash'}></use>
              </Svg>
            </IconButton>
          </li>
        </IconList>
      </TaskTitle>

      <Droppable droppableId={`${prefix}`}>
        {provided => (
          <TaskList {...provided.droppableProps} ref={provided.innerRef}>
            {cards &&
              cards.length > 0 &&
              cards.map((card, index) => (
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
