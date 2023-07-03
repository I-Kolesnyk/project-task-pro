import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import AddColumnButton from 'components/AddColumnButton';
import { useOneBoardLoading, useBoardData, useBackground } from 'hooks';
import Column from 'components/Column';
import { updateBoardColumns } from 'redux/board/slice';
import { useDispatch } from 'react-redux';
import { Wrapper, Header, ColumnList, BoardTitle } from './ScreenPage.styled';

function ScreenPage() {
  const oneBoard = useBoardData();
  const [elements, setElements] = useState([]);
  const isLoading = useOneBoardLoading();
  const dispatch = useDispatch();

  const {
    backgrounds: { backgrounds },
  } = useBackground();

  const boardBackground = backgrounds.find(
    bg => bg.name === oneBoard.background
  );

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
    const [task] = sourceTasks.splice(sourceIndex, 1);

    destinationTasks.splice(destinationIndex, 0, task);

    sourceColumn.tasks = sourceTasks;
    destinationColumn.tasks = destinationTasks;

    columnsArray[sourceColumnId] = sourceColumn;
    columnsArray[destinationColumnId] = destinationColumn;

    boardCopy.columns = columnsArray;

    dispatch(updateBoardColumns(boardCopy.columns));
  };

  return (
    !isLoading && (
      <Wrapper background={boardBackground}>
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
