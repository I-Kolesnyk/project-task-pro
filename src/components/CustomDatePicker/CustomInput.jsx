import { StyledInput } from './CustomInput.styled';
import { forwardRef } from 'react';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <StyledInput onClick={onClick} ref={ref}>
      {value}
    </StyledInput>
  );
});

export default CustomInput;
