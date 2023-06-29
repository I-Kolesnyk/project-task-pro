import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import AddColumnButton from 'components/AddColumnButton/AddColumnButton';
import { useDispatch } from 'react-redux';

import { useBoard, useOneBoardLoading, useAllBoards } from 'hooks';
import Column from 'components/Column';
import { Section } from './ScreenPage.styled';
import { setBoard } from 'redux/board/slice';
import { getBoardById } from 'redux/board/operations';
import { useParams } from 'react-router';

function ScreenPage() {
  const allBoards = useAllBoards();
  const oneBoard = useBoard();
  console.log('board', oneBoard);
  // const { columns, board } = useBoard();
  const [elements, setElements] = useState([]);
  const dispatch = useDispatch();
  const isOneBoardLoading = useOneBoardLoading();
  const { boardName } = useParams();
  const [isBoard, setIsBoard] = useState(false);
  console.log(oneBoard.board.columns);

  useEffect(() => {
    if (oneBoard.board.length !== 0) {
      setIsBoard(true);
    }
  }, [oneBoard.board, setIsBoard]);

  // const aciveBoardId = allBoards.boards.find(
  //   board => board.title === boardName
  // )._id;

  // useEffect(() => {
  //   dispatch(getBoardById(aciveBoardId));
  // }, [aciveBoardId, dispatch]);

  useEffect(() => {
if(isBoard) {
  console.log(oneBoard.board.columns)
  setElements(oneBoard.board.columns);
}
  }, [isBoard, oneBoard.board.columns]);

  const removeFromList = (list, index) => {
    const result = list;
    console.log('index', list);
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
    // console.log('listCopy', listCopy);
    setElements(Object.values(listCopy));
    // dispatch(setBoard(elements));
  };
  // console.log('elements2', elements);
  return (
    isBoard && (
      <>
        <header>
          <h2>{oneBoard.title}</h2>
          <p>Filters</p>
        </header>
        <Section>
          <DragDropContext onDragEnd={onDragEnd}>
            {elements.length !== 0 &&
              elements.map(({ title, _id, tasks }, columnIndex) => (
                <Column
                  cards={tasks}
                  columnTitle={title}
                  columnId={_id}
                  key={_id}
                  prefix={columnIndex}
                />
              ))}
          </DragDropContext>
          <AddColumnButton />
        </Section>
      </>
    )
  );
}

export default ScreenPage;
