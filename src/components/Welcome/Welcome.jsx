import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: 'spring',
            damping: 8,
            stiffness: 80,
            ease: 'easeIn',
          }}
        >
          <WelcomeImg />
        </motion.div>

        <LogoThumb>
          <motion.div
            initial={{ opacity: 0, x: -200, rotate: -360 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 2.5,
              duration: 0.5,
              type: 'spring',
              damping: 5,
              stiffness: 60,
              yoyo: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Svg>
              <use href={sprite + '#logo'}></use>
            </Svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {' '}
            <Title>Task Pro</Title>
          </motion.div>
        </LogoThumb>
      </Thumb>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Text>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Text>
      </motion.div>
    </WelcomeContainer>
  );
};

export default Welcome;
