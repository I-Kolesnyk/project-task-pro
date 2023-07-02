import { DragDropContext } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';

import AddColumnButton from 'components/AddColumnButton';
import { useOneBoardLoading, useBoardData } from 'hooks';
import Column from 'components/Column';
import {
  Wrapper,
  Header,
  ColumnList,
  BoardTitle,
  Filters,
  FilterIcon,
} from './ScreenPage.styled';
import sprite from '../../assets/sprite.svg';

function ScreenPage() {
  const oneBoard = useBoardData();  
  const [elements, setElements] = useState([]);
  const isLoading = useOneBoardLoading();
  console.log(oneBoard)

  useEffect(() => {
    if (!isLoading) {
      setElements(oneBoard.columns);
    }
  }, [isLoading, oneBoard.columns]);

  const removeFromList = (list, index) => {
    const result = list;
    console.log('index', index.typeof);
    console.log('list', list);
    console.log('tasks', Array.isArray(result.tasks));
    console.log('result', result);
    const [removed] = result.tasks.splice(index, 1);
    console.log('removed', removed);
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
    console.log("sorseLise",  sourceList, result.source.index);
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
  // console.log('elements --> ', elements);

  return (
    !isLoading && (
      <Wrapper>
        <Header>
          <BoardTitle>{oneBoard.title}</BoardTitle>
          <Filters>
            <FilterIcon>
              <use href={sprite + '#filter'}></use>
            </FilterIcon>
            <span>Filters</span>
          </Filters>
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
