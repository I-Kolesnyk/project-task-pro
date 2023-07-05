import { Draggable } from '@hello-pangea/dnd';

import * as s from './Card.styled';
import sprite from '../../assets/sprite.svg';
import IconList from './IconList/IconList';
import Details from './Details/Details';
import DeadlineSignal from './DeadlineSignal/DeadlineSignal';

function Card({ item, index }) {
  const toDeadLine = date => {
    const deadline = Date.parse(
      new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))
    );
    const daysLeft = Math.ceil((deadline - Date.now()) / (1000 * 3600 * 24));

    return daysLeft;
  };

  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided, snapshot) => {
        return (
          <s.Wrapper
            priority={item.priority}
            key={item._id}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <s.TaskTitle>{item.title}</s.TaskTitle>
            <s.TaskDescription>{item.description}</s.TaskDescription>

            <s.Box>
              <Details priority={item.priority} deadline={item.deadline} />
              <s.Box>
                {toDeadLine(item.deadline) <= 1 && (
                  <DeadlineSignal
                    timeLeft={toDeadLine(item.deadline)}
                    sprite={sprite}
                  />
                )}
                <IconList sprite={sprite} taskInfo={item} />
              </s.Box>
            </s.Box>
          </s.Wrapper>
        );
      }}
    </Draggable>
  );
}

export default Card;
