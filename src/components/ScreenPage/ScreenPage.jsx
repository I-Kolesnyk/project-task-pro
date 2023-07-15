import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Filter from 'components/Filter/Filter';
import AddColumnButton from 'components/AddColumnButton';
import { useOneBoardLoading, useBoardData, useBackground } from 'hooks';
import Column from 'components/Column';
import { updateBoardColumns } from 'redux/board/slice';
import { Wrapper, Header, ColumnList, BoardTitle } from './ScreenPage.styled';
import { editCardOwner } from 'redux/board/operations';

function ScreenPage() {
  const oneBoard = useBoardData();
  const [elements, setElements] = useState([]);
  const isLoading = useOneBoardLoading();
  const dispatch = useDispatch();

  const {
    backgrounds: { backgrounds },
  } = useBackground();

  const boardBackground = oneBoard => {
    let bg = backgrounds.find(bg => bg.name === oneBoard.background);
    if (!bg)
      bg = {
        mobile: '',
        tablet: '',
        desktop: '',
      };

    return bg;
  };

  useEffect(() => {
    if (!isLoading) {
      setElements(oneBoard.columns);
    }
  }, [isLoading, oneBoard.columns]);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const boardCopy = { ...oneBoard };

    const columnsArray = Object.values(boardCopy.columns);

    const sourceColumn = JSON.parse(
      JSON.stringify(boardCopy.columns[sourceColumnId])
    );
    const destinationColumn = JSON.parse(
      JSON.stringify(boardCopy.columns[destinationColumnId])
    );

    const sourceTasks = [...sourceColumn.tasks];
    const destinationTasks = [...destinationColumn.tasks];

    const task = sourceTasks.splice(sourceIndex, 1)[0];

    if (sourceColumnId !== destinationColumnId) {
      destinationTasks.splice(destinationIndex, 0, task);
      destinationTasks.forEach((task, idx) => {
        destinationTasks[idx].index = idx;
        dispatch(
          editCardOwner({
            taskId: task._id,
            info: {
              column: destinationColumn._id,
              index: idx,
            },
          })
        );
      });
    } else {
      const [delTask] = destinationTasks.splice(sourceIndex, 1);
      destinationTasks.splice(destinationIndex, 0, delTask);
      destinationTasks.forEach((task, idx) => {
        destinationTasks[idx].index = idx;
        dispatch(
          editCardOwner({
            taskId: task._id,
            info: {
              column: destinationColumn._id,
              index: idx,
            },
          })
        );
      });
    }
    sourceColumn.tasks = sourceTasks;
    destinationColumn.tasks = destinationTasks;

    columnsArray[sourceColumnId] = sourceColumn;
    columnsArray[destinationColumnId] = destinationColumn;

    boardCopy.columns = columnsArray;
    dispatch(updateBoardColumns(boardCopy.columns));
  };

  return (
    <Wrapper bg={boardBackground(oneBoard)}>
      <Header>
        <BoardTitle>{oneBoard.title}</BoardTitle>
        <Filter />
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
  );
}

export default ScreenPage;
