import Card from 'components/Card';
import { Wrapper } from './Column.styled';

function Column({ title, id, cards }) {
  return (
    <Wrapper>
      <p>{title}</p>
      {cards.map(({ id, title }) => {
        return <Card title={title} key={id} />;
      })}
    </Wrapper>
  );
}

export default Column;
