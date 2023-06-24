import { Wrapper } from './Card.styled';

function Card({ id, title }) {
  return (
    <Wrapper>
      <p>{title}</p>
      <br />
      <button type="button">Drag-and-drop</button>
    </Wrapper>
  );
}

export default Card;
