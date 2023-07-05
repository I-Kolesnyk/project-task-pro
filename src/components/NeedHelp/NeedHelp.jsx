// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import sprite from '../../assets/sprite.svg';
// import {
//   Button,
//   ButtonText,
//   Container,
//   Image,
//   Span,
//   Svg,
//   Text,
// } from './NeedHelp.styled';
// import Modal from 'components/ModalWindow/ModalWindow';
// import HelpForm from 'components/HelpForm/HelpForm';

// const NeedHelp = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const animationKey = Date.now();

//   const shakeImage = {
//     initial: {
//       opacity: 0,
//       scale: 0.8,
//       rotate: -10,
//     },
//     animate: {
//       opacity: 1,
//       scale: [0.8, 1.2, 0.9, 1.1, 1],
//       rotate: [-10, 10, -5, 5, 0],
//       transition: {
//         delay: 0.4,
//         duration: 0.5,
//         type: 'spring',
//         damping: 6,
//         stiffness: 2500,
//       },
//     },
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Container>
//         <motion.div
//           key={animationKey}
//           initial="initial"
//           animate="animate"
//           variants={shakeImage}
//         >
//           {' '}
//           <picture>
//             <source srcSet="https://i.ibb.co/P6XjKVv/plant-min.png 1x, https://i.ibb.co/t4n5H65/plant-2x-min.png 2x" />
//             <Image
//               src="https://i.ibb.co/P6XjKVv/plant-min.png"
//               alt="plant-min"
//               border="0"
//             />
//           </picture>
//         </motion.div>

//         <Text>
//           If you need help with <Span>TaskPro</Span>, check out our support
//           resources or reach out to our customer support team.
//         </Text>

//         <Button onClick={openModal}>
//           <Svg width="20px" height="20px">
//             <use href={sprite + '#help-circle'}></use>
//           </Svg>
//           <ButtonText>Need help?</ButtonText>
//         </Button>
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <HelpForm />
//         </Modal>
//       </Container>
//     </>
//   );
// };
// export default NeedHelp;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sprite from '../../assets/sprite.svg';
import {
  Button,
  ButtonText,
  Container,
  Image,
  Span,
  Svg,
  Text,
} from './NeedHelp.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import HelpForm from 'components/HelpForm/HelpForm';
import { shakeImageAnimation, buttonShine } from './NeedHelpAnimation';

const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animationKey = Date.now();
  const animatButtonKey = Date.now();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <motion.div
          key={animationKey}
          initial="initial"
          animate="animate"
          variants={shakeImageAnimation}
        >
          <picture>
            <source srcSet="https://i.ibb.co/P6XjKVv/plant-min.png 1x, https://i.ibb.co/t4n5H65/plant-2x-min.png 2x" />
            <Image
              src="https://i.ibb.co/P6XjKVv/plant-min.png"
              alt="plant-min"
              border="0"
            />
          </picture>
        </motion.div>

        <Text>
          If you need help with <Span>TaskPro</Span>, check out our support
          resources or reach out to our customer support team.
        </Text>

        <Button onClick={openModal}>
          <Svg width="20px" height="20px">
            <use href={sprite + '#help-circle'}></use>
          </Svg>
          <motion.span
            key={animatButtonKey}
            initial="initial"
            animate="animate"
            variants={buttonShine}
          >
            <ButtonText>Need help?</ButtonText>
          </motion.span>
        </Button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <HelpForm />
        </Modal>
      </Container>
    </>
  );
};

export default NeedHelp;
