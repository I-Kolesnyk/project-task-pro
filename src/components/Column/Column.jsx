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
const icons = ['#pencil', '#trash'];

function Column({ columnTitle, columnId, cards, prefix }) {
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
              {cards &&
                cards.length > 0 &&
                cards.map((card, index) => (
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
