import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CustomInput from './CustomInput';
import { Container, DateDeadline } from './CustomInput.styled';

function CustomDatePicker({ startDeadline, setStartDeadline }) {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };

  return (
    <Container>
      <DatePicker
        selected={startDeadline}
        onChange={date => {
          setStartDeadline(date);
        }}
        disabledKeyboardNavigation
        customInput={<CustomInput />}
        dateFormat={'dd/MM/yyyy'}
        minDate={new Date()}
      />
      <DateDeadline>
        {startDeadline.toLocaleDateString('en-US', options)}
      </DateDeadline>
    </Container>
  );
}

export default CustomDatePicker;
