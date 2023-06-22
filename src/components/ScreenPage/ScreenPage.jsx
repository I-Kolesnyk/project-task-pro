import { useParams } from 'react-router-dom';

function ScreenPage() {
  const { boardName } = useParams();
  return (
    <>
      <header>
        <h2>{boardName}</h2>
        <p>Filters</p>
      </header>
      <p>
        Before starting your project, it is essential to create a board to
        visualize and track all the necessary tasks and milestones. This board
        serves as a powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>
      <section></section>
    </>
  );
}

export default ScreenPage;
