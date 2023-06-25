import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useBoard } from 'hooks';
import Column from 'components/Column';
import { Section } from './ScreenPage.styled';
// import { setBoard } from 'redux/board/slice';

function ScreenPage() {
  const dispatch = useDispatch();
  const { board, columns } = useBoard();

  const [elements, setElements] = useState(columns);

  const updatedBoard = {
    title: board.title,
    id: board.id,
    columns: elements,
  };

  // useEffect(() => {
  //   console.log('updBoard', updatedBoard);
  //   // dispatch(setBoard(updatedBoard));
  // }, [elements]);

  const removeFromList = (list, index) => {
    const result = list;
    const [removed] = result.cards.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = list;
    list.cards.splice(index, 0, element);
    return result;
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    console.log(destinationList);
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <>
      <header>
        <h2>{board.title}</h2>
        <p>Filters</p>
      </header>
      <Section>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.length !== 0 &&
            columns.map(({ title, id, cards }, columnIndex) => (
              <Column
                cards={cards}
                title={title}
                key={id}
                prefix={columnIndex}
              />
            ))}
        </DragDropContext>
      </Section>
    </>
  );
}

export default ScreenPage;
