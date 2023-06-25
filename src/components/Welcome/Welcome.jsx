import {
  WelcomeContainer,
  Thumb,
  Svg,
  LogoThumb,
  Title,
  Text,
} from './Welcome.styled';
import WelcomeImg from 'components/WelcomeImg/WelcomeImg';
import sprite from '../../assets/sprite.svg';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Thumb>
        <WelcomeImg />
        <LogoThumb>
          <Svg>
            <use href={sprite + '#logo'}></use>
          </Svg>
          <Title>Task Pro</Title>
        </LogoThumb>
      </Thumb>
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
    </WelcomeContainer>
  );
};

export default Welcome;
