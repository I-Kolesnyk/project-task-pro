import { Button, Svg, Box } from './AddColumnButton.styled';
import sprite from '../../assets/sprite.svg';
import { addColumn } from 'redux/board/operations';
import { useDispatch } from 'react-redux';

const AddColumnButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addColumn({ title: 'one', board: '64983c63227de21e95999c01' }));
  };
  return (
    <div>
      <Button onClick={onClick}>
        <Box>
          <Svg>
            <use href={sprite + '#plus'}></use>
          </Svg>
        </Box>
        Add another column
      </Button>
    </div>
  );
};

export default AddColumnButton;
