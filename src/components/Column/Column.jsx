import { Droppable } from "@hello-pangea/dnd";

import Card from 'components/Card';
import { Wrapper } from './Column.styled';

function Column({ title, id, cards, prefix }) {
  return (
    <Wrapper>
      <p>{title}</p>
      <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {cards.map(({ id, title }, index) => (
            <Card key={id}  index={index} title={title} id={id}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>  
    </Wrapper>
  );
}

export default Column;
