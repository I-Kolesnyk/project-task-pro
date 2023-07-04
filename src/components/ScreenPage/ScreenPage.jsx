import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import AddColumnButton from 'components/AddColumnButton';
import { useOneBoardLoading, useBoardData, useBackground } from 'hooks';
import Column from 'components/Column';
import { updateBoardColumns } from 'redux/board/slice';
import { useDispatch } from 'react-redux';
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
    console.log('sourceColumnId', sourceColumnId);
    const destinationColumnId = result.destination.droppableId;
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const boardCopy = { ...oneBoard };
    console.log('boardCopy', boardCopy);

    const columnsArray = Object.values(boardCopy.columns);

    const sourceColumn = { ...boardCopy.columns[sourceColumnId] };
    const destinationColumn = { ...boardCopy.columns[destinationColumnId] };
    console.log('sourse', sourceColumn);

    const sourceTasks = [...sourceColumn.tasks];
    const destinationTasks = [...destinationColumn.tasks];
    // const [task] = sourceTasks.splice(sourceIndex, 1);
    const task = sourceTasks.splice(sourceIndex, 1)[0];
    console.log(sourceTasks, destinationTasks);

    // destinationTasks.splice(destinationIndex, 0, task);
    if (sourceColumnId !== destinationColumnId) {
      destinationTasks.splice(destinationIndex, 0, task);
    } else {
      // If source and destination columns are the same, no need to copy the task
      destinationTasks.splice(
        destinationIndex,
        0,
        ...sourceTasks.slice(sourceIndex)
      );
    }
    sourceColumn.tasks = sourceTasks;
    destinationColumn.tasks = destinationTasks;

    columnsArray[sourceColumnId] = sourceColumn;
    columnsArray[destinationColumnId] = destinationColumn;
    console.log(destinationIndex);
    console.log(destinationTasks[0].index);

    boardCopy.columns = columnsArray;
    dispatch(updateBoardColumns(boardCopy.columns));
    destinationTasks.forEach(task => {
      dispatch(
        editCardOwner({
          taskId: task._id,
          info: {
            column: destinationColumn._id,
            index: task.index,
          },
        })
      );
    });
  };

  return (
    !isLoading && (
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
    )
  );
}

export default ScreenPage;
