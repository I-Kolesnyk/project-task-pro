import sprite from '../../assets/sprite.svg';
import { Wrapper, Text, Button, Svg } from './AddBoardButton.styled';

function AddBoardButton() {
  return (
    <Wrapper>
      <Text>Create a new board</Text>
      <Button type="button">
        <Svg width="20px" height="20px" >
          <use href={sprite + "#plus"}></use>
        </Svg>
      </Button>
    </Wrapper>
  );
}

export default AddBoardButton;
