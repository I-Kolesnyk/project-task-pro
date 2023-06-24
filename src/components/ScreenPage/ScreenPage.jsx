import { useParams } from 'react-router-dom';
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from 'react';

import { useBoard } from 'hooks';
import Column from 'components/Column';
import { Section } from './ScreenPage.styled';

function ScreenPage() {
  const { boardName } = useParams();
  const [elements, setElements] = useState(generateLists());

  const { title, id, columns } = useBoard();
  console.log(columns);

  const generateLists = () =>
  columns.reduce(
    (acc, id) => ({ ...acc, [id]: getItems(10, id) }),
    {}
  );

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...columns };

    const sourceList = listCopy[result.source.id];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.id] = newSourceList;
    const destinationList = listCopy[result.destination.id];
    listCopy[result.destination.id] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <>
     <header>
        <h2>{title}</h2>
        <p>Filters</p>
      </header>
      <Section>
      <DragDropContext onDragEnd={onDragEnd}>
        
          {columns.map(({ title, id, cards }) => (
            <Column
              cards={cards[id]}
              key={id}
              prefix={id}
            />
          ))}
       
      </DragDropContext>
    </Section>
      {/* <header>
        <h2>{title}</h2>
        <p>Filters</p>
      </header>
      <Section>
        {columns.map(({ title, id, cards }) => {
          return <Column title={title} key={id} cards={cards} />;
        })}
      </Section> */}
    </>
  );
}

export default ScreenPage;
