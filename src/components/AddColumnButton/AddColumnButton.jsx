import { Button, Svg, Box } from './AddColumnButton.styled';
import sprite from '../../assets/sprite.svg';

const AddColumnButton = () => {
  return (
    <div>
      <Button>
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
