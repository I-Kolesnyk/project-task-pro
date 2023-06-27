import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import AddColumnButton from 'components/AddColumnButton/AddColumnButton';
import { useDispatch } from 'react-redux';

import { useBoard } from 'hooks';
import Column from 'components/Column';
import { Section } from './ScreenPage.styled';
import { setBoard } from 'redux/board/slice';

function ScreenPage() {
  const { columns, board } = useBoard();
  const [elements, setElements] = useState(columns);
  const dispatch = useDispatch();
  console.log('elements1', elements);

  // useEffect(() => {
  //   dispatch(setBoard(elements));
  // }, [dispatch, elements]);

  const removeFromList = (list, index) => {
    const result = list;
    console.log('index', index);
    console.log('removed', result.tasks);
    const [removed] = result.tasks.splice(index, 1);

    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = list;
    list.tasks.splice(index, 0, element);
    return result;
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };
    console.log(listCopy);
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
    console.log('listCopy', listCopy);
    setElements(Object.values(listCopy));
    // dispatch(setBoard(elements));
  };
  console.log('elements2', elements);
  return (
    <>
      <header>
        <h2>{board.title}</h2>
        <p>Filters</p>
      </header>
      <Section>
        <DragDropContext onDragEnd={onDragEnd}>
          {elements.length !== 0 &&
            elements.map(({ title, _id, tasks }, columnIndex) => (
              <Column
                cards={tasks}
                title={title}
                id={_id}
                key={_id}
                prefix={columnIndex}
              />
            ))}
        </DragDropContext>
        <AddColumnButton />
      </Section>
    </>
  );
}

export default ScreenPage;
