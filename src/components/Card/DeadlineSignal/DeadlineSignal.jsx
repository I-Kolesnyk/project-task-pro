import SvgComponent from 'components/SvgComponent/SvgComponent';
import { BellWrapper } from './DeadlineSignal.styled';

const DeadlineSignal = ({ timeLeft, sprite }) => {
  return (
    <div>
      <BellWrapper time={timeLeft}>
        <SvgComponent
          w={'16px'}
          h={'16px'}
          sprite={sprite}
          name={timeLeft < 0 ? '#time-is-up' : '#bell-01'}
        />
      </BellWrapper>
    </div>
  );
};

export default DeadlineSignal;
