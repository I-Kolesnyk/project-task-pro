import { Draggable } from '@hello-pangea/dnd';
import * as s from './Card.styled';
import sprite from '../../assets/sprite.svg';
import SvgComponent from './SvgComponent';

const icons = ['#arrow-circle-broken-right', '#pencil', '#trash'];

function Card({ _id, title, index, priority, deadline, description }) {
  const toDeadLine = date => {
    const deadline = Date.parse(
      new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))
    );
    const daysLeft = Math.ceil((deadline - Date.now()) / (1000 * 3600 * 24));

    console.log('days left--> ', daysLeft);
    return daysLeft;
  };

  return (
    <Draggable draggableId={_id} index={index}>
      {(provided, snapshot) => {
        return (
          <s.Wrapper
            priority={priority}
            key={_id}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <s.TaskTitle>{title}</s.TaskTitle>
            <s.TaskDescription>
              {description
                ? description
                : `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint  itaque tempore ducimus cum eius. Exercitationem quaerat magnam
              pariatur molestiae!`}
            </s.TaskDescription>

            <s.Box>
              <s.Box>
                <s.PriorityBox>
                  <s.DetailsSuptitle>Priority</s.DetailsSuptitle>

                  <s.Priority priority={priority}>
                    {priority === 'without priority'
                      ? 'Without'
                      : priority[0].toUpperCase() + priority.slice(1)}
                  </s.Priority>
                </s.PriorityBox>
                <s.DeadlineBox>
                  <s.DetailsSuptitle>Deadline</s.DetailsSuptitle>

                  <span>{deadline.replace(/[-]/gi, '/')}</span>
                </s.DeadlineBox>
              </s.Box>
              <s.Box>
                <div>
                  {toDeadLine(deadline) <= 1 && (
                    <s.BellWrapper>
                      <SvgComponent
                        w={'16px'}
                        h={'16px'}
                        sprite={sprite}
                        name={'#bell-01'}
                      />
                    </s.BellWrapper>
                  )}
                </div>
                <s.IconList>
                  {icons.map(icon => (
                    <s.IconListItem>
                      <s.IconBtn>
                        <SvgComponent
                          w={'16px'}
                          h={'16px'}
                          sprite={sprite}
                          name={icon}
                        />
                      </s.IconBtn>
                    </s.IconListItem>
                  ))}
                </s.IconList>
              </s.Box>
            </s.Box>
          </s.Wrapper>
        );
      }}
    </Draggable>
  );
}

export default Card;
