import { useParams } from 'react-router-dom';
import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useBoard } from 'hooks';
import Column from 'components/Column';
import { Section } from './ScreenPage.styled';
// import { setBoard } from 'redux/board/slice';

function ScreenPage() {
  const dispatch = useDispatch();
  // const board = useBoard();
  const { title, id, columns } = useBoard();
  const { boardName } = useParams();
  const [elements, setElements] = useState(columns);
  console.log('elements1', elements);
  // console.log(columns);
  // useEffect(() => {
  //   setElements();
  // }, []);

  const removeFromList = (list, index) => {
    const result = list;
    const [removed] = result.cards.splice(index, 1);
    console.log('removed', list);
    console.log('removed', index);
    console.log('removed', removed);
    console.log('removed', result);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    // const result = Array.from(list);
    // const result1 = list.cards;
    // result1.splice(index, 0, element);
    // console.log('add', result1);
    // console.log('add', list);
    const result = list;
    list.cards.splice(index, 0, element);
    // console.log('add', index);
    // console.log('add', element);
    // console.log('add', result);
    return result;
  };

  const onDragEnd = result => {
    // console.log('result', result);
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };
    console.log('list-copy', listCopy);
    const sourceList = listCopy[result.source.droppableId];
    // console.log('sourceList', sourceList);
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    // const destinationList = listCopy[result.destination.droppableId];
    // const destinationList = listCopy[result.source.droppableId];
    // console.log("destinationList", destinationList)
    console.log('destination index', result.destination.droppableId);

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
        <h2>{title}</h2>
        <p>Filters</p>
      </header>
      <Section>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map(({ title, id, cards }, columnIndex) => (
            <Column cards={cards} title={title} key={id} prefix={columnIndex} />
          ))}
        </DragDropContext>
      </Section>
    </>
  );
}

export default ScreenPage;
