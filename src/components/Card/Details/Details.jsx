import * as s from './Details.styled';

const Details = ({ priority, deadline }) => {
  return (
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
  );
};

export default Details;
