import { Draggable } from '@hello-pangea/dnd';
import { Wrapper } from './Card.styled';

function Card({ id, title, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <Wrapper
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p>{title}</p>
            <span>Content</span>
          </Wrapper>
        );
      }}
    </Draggable>
  );
}

export default Card;
