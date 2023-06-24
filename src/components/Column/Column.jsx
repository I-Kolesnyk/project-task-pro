import { Droppable } from "react-beautiful-dnd";

import Card from 'components/Card';
import { Wrapper } from './Column.styled';

function Column({ title, id, cards }) {
  return (
    <Wrapper>
      <p>{title}</p>
      <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {cards.map(({ id, title }, index) => (
            <Card key={id}  index={index} title={title}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
      {/* {cards.map(({ id, title }) => {
        return <Card title={title} key={id} />;
      })} */}
    </Wrapper>
  );
}

export default Column;
