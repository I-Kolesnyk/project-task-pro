import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';

import Filter from 'components/Filter/Filter';
import AddColumnButton from 'components/AddColumnButton';
import { useOneBoardLoading, useBoardData } from 'hooks';
import Column from 'components/Column';
import { Wrapper, Header, ColumnList, BoardTitle } from './ScreenPage.styled';
import { useBackgrounds } from 'hooks';

function ScreenPage() {
  const oneBoard = useBoardData();
  const [elements, setElements] = useState([]);
  const isLoading = useOneBoardLoading();
  const {
    backgrounds: { backgrounds },
  } = useBackgrounds();

  const boardBackground = backgrounds.find(
    bg => bg.name === oneBoard.background
  );
  console.log('backgrounds --> ', backgrounds);
  useEffect(() => {
    if (!isLoading) {
      setElements(oneBoard.columns);
    }
  }, [isLoading, oneBoard.columns]);

  const removeFromList = (list, index) => {
    const result = list;
    console.log('index in remove', typeof index);
    console.log('list', list);
    console.log('tasks', Array.isArray(result.tasks));
    console.log('result', result);
    const [removed] = result.tasks.splice(index, 1);
    console.log('removed', removed);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    console.log('index in add', index);
    console.log('list', list);
    const result = list;
    list.tasks.splice(index, 0, element);
    return result;
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };
    // console.log(listCopy);
    const sourceList = listCopy[result.source.droppableId];
    console.log('sorseLise', sourceList, result.source.index);
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
    !isLoading && (
      <Wrapper background={boardBackground}>
        <Header>
          <BoardTitle>{oneBoard.title}</BoardTitle>
          <Filter></Filter>
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
