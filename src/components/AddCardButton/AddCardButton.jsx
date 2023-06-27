import { useDispatch } from 'react-redux';
import { Button, Svg, Box } from './AddCardButton.styled';
import sprite from '../../assets/sprite.svg';
import { addCard } from 'redux/board/operations';

const AddCardButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addCard({title: "title", deadline: "04.07.23", column: "649b357fb6a41ba022759ace", index : 1}))
  }
  return (
    <div>
      <Button onClick={onClick}>
        <Box>
          <Svg>
            <use href={sprite + '#plus'}></use>
          </Svg>
        </Box>
        Add another card
      </Button>
    </div>
  );
};

export default AddCardButton;
