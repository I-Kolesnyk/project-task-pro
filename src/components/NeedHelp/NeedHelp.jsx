import { useState } from 'react';
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

const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <picture>
          <source srcSet="https://i.ibb.co/P6XjKVv/plant-min.png 1x, https://i.ibb.co/t4n5H65/plant-2x-min.png 2x" />
          <Image
            src="https://i.ibb.co/P6XjKVv/plant-min.png"
            alt="plant-min"
            border="0"
          />
        </picture>
        <Text>
          If you need help with <Span>TaskPro</Span>, check out our support
          resources or reach out to our customer support team.
        </Text>

        <Button onClick={openModal}>
          <Svg width="20px" height="20px">
            <use href={sprite + '#help-circle'}></use>
          </Svg>
          <ButtonText>Need help?</ButtonText>
        </Button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <HelpForm />
        </Modal>
      </Container>
    </>
  );
};
export default NeedHelp;
