import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import AddColumnButton from 'components/AddColumnButton/AddColumnButton';
import { useDispatch } from 'react-redux';

import { useBoard, useOneBoardLoading, useAllBoards } from 'hooks';
import Column from 'components/Column';
import { Wrapper, ColumnList, Header, BoardTitle } from './ScreenPage.styled';
import { setBoard } from 'redux/board/slice';
import { getBoardById } from 'redux/board/operations';
import { useParams } from 'react-router';

function ScreenPage() {
  const allBoards = useAllBoards();
  const oneBoard = useBoard();
  // console.log('oneBoard', oneBoard);
  // const { columns, board } = useBoard();
  const [elements, setElements] = useState([]);
  const dispatch = useDispatch();
  const isOneBoardLoading = useOneBoardLoading();
  const { boardName } = useParams();
  const [isBoard, setIsBoard] = useState(false);

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
    if (isBoard) {
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
    console.log('listCopy', listCopy);
    setElements(Object.values(listCopy));
    // dispatch(setBoard(elements));
  };
  console.log('elements --> ', elements);

  return (
    isBoard && (
      <Wrapper>
        <Header>
          <h2>{oneBoard.boardtitle}</h2>
          <p>Filters</p>
        </Header>
        <ColumnList>
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
        </ColumnList>
      </Wrapper>
    )
  );
}

export default ScreenPage;
