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

function Column({ title, id, cards, prefix }) {
  return (
    <Wrapper>
      <TaskTitle>
        <span>{title}</span>
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
              cards.map(({ _id, title }, index) => (
                <Card key={_id} index={index} title={title} id={_id} />
              ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <AddCardButton />
    </Wrapper>
  );
}

export default Column;
