export const thumbAnimation = {
  initial: { opacity: 0, scale: 0, y: -200 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: {
    delay: 0.2,
    duration: 0.5,
    type: 'spring',
    damping: 8,
    stiffness: 80,
    ease: 'easeIn',
  },
};

export const logoThumbAnimation = {
  initial: { opacity: 0, x: -200, rotate: -360 },
  animate: { opacity: 1, x: 0, rotate: 0 },
  transition: {
    delay: 2.5,
    duration: 2.5,
    type: 'spring',
    damping: 5,
    stiffness: 30,
    yoyo: Infinity,
    ease: 'easeInSine',
  },
};

export const titleAnimation = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.8 },
};

export const textAnimation = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 1.2 },
};
