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
          icon={timeLeft < 0 ? '#time-is-up' : '#bell'}
        />
      </BellWrapper>
    </div>
  );
};

export default DeadlineSignal;
