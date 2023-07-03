import * as s from './IconList.styled';
import { IconBtn } from './IconList.styled';
import SvgComponent from '../../SvgComponent/SvgComponent';
import { useState } from 'react';
import Modal from 'components/ModalWindow/ModalWindow';
import EditCardForm from 'components/EditCardForm/EditCardForm';
import sprite from '../../../assets/sprite.svg';
import { deleteCard } from 'redux/board/operations';
import { useDispatch } from 'react-redux';

// const icons = ['#arrow-circle-broken-right', '#pencil', '#trash'];

const IconList = ({ taskInfo }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { _id: taskId } = taskInfo;

  return (
    <>
      <div>
        <s.IconList>
          <s.IconListItem key={'#pencil'}>
            <IconBtn onClick={openModal}>
              <SvgComponent
                w={'16px'}
                h={'16px'}
                sprite={sprite}
                icon={'#pencil'}
              />
            </IconBtn>
          </s.IconListItem>
          <s.IconListItem key={'#trash'}>
            <IconBtn type="button" onClick={() => dispatch(deleteCard(taskId))}>
              <SvgComponent
                w={'16px'}
                h={'16px'}
                sprite={sprite}
                icon={'#trash'}
              />
            </IconBtn>
          </s.IconListItem>
        </s.IconList>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {<EditCardForm onClose={closeModal} taskInfo={taskInfo} />}
        </Modal>
      )}
    </>
  );
};

export default IconList;
