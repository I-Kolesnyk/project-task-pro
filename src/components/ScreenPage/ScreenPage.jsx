import { useParams } from 'react-router-dom';

import { useBoard } from 'hooks';
import Column from 'components/Column';
import { Section } from './ScreenPage.styled';

function ScreenPage() {
  const { boardName } = useParams();

  const { title, id, columns } = useBoard();
  console.log(columns);

  return (
    <>
      <header>
        <h2>{title}</h2>
        <p>Filters</p>
      </header>
      <Section>
        {columns.map(({ title, id, cards }) => {
          return <Column title={title} key={id} cards={cards} />;
        })}
      </Section>
    </>
  );
}

export default ScreenPage;
