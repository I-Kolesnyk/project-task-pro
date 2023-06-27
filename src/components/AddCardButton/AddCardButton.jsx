import { Button, Svg, Box } from './AddCardButton.styled';
import sprite from '../../assets/sprite.svg';

const AddCardButton = () => {
  return (
    <div>
      <Button>
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
