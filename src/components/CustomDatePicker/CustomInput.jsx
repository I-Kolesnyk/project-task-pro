import { StyledInput } from './CustomInput.styled';

const { forwardRef } = require('react');

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <StyledInput onClick={onClick} ref={ref}>
    {value}
  </StyledInput>
));

export default CustomInput;
