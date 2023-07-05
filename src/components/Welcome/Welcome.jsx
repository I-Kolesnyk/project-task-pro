import React from 'react';
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
import {
  thumbAnimation,
  logoThumbAnimation,
  titleAnimation,
  textAnimation,
} from './WelcomeAnimation';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Thumb>
        <motion.div
          initial={thumbAnimation.initial}
          animate={thumbAnimation.animate}
          transition={thumbAnimation.transition}
        >
          <WelcomeImg />
        </motion.div>

        <LogoThumb>
          <motion.div
            initial={logoThumbAnimation.initial}
            animate={logoThumbAnimation.animate}
            transition={logoThumbAnimation.transition}
          >
            <Svg>
              <use href={sprite + '#logo'}></use>
            </Svg>
          </motion.div>
          <motion.div
            initial={titleAnimation.initial}
            animate={titleAnimation.animate}
            transition={titleAnimation.transition}
          >
            <Title>Task Pro</Title>
          </motion.div>
        </LogoThumb>
      </Thumb>
      <motion.div
        initial={textAnimation.initial}
        animate={textAnimation.animate}
        transition={textAnimation.transition}
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
