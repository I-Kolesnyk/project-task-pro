export const shakeImageAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    scale: [0.8, 1.2, 0.9, 1.1, 1],
    rotate: [-10, 10, -5, 5, 0],
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: 'spring',
      damping: 6,
      stiffness: 2500,
    },
  },
};

export const buttonShine = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],

    transition: {
      delay: 2,
      duration: 1.4,
      ease: 'linear',
      repeat: 1,
    },
  },
};
