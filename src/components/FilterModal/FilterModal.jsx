import { useState } from 'react';
import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { filterTasksByPriority } from 'redux/filter/slice';

import { CustomRadio, CustomRadioContainer } from './FilterModal.styled';
// import Modal from 'components/ModalWindow/ModalWindow';

const FilterModal = () => {
  const [radioChoose, setRadioChoose] = useState('without');
  const dispatch = useDispatch();
  const { register } = useForm({
    defaultValues: {
      lableColor: '',
    },
  });

  const chooseBtn = e => {
    console.log('filter modal value --> ', e.target.value);
    setRadioChoose(e.target.value);
    dispatch(filterTasksByPriority(e.target.value));
  };

  return (
    <>
      <CustomRadioContainer>
        <CustomRadio
          type="radio"
          value="all"
          id="all"
          clr="gray"
          onClick={chooseBtn}
          checked={radioChoose === 'all' ? true : false}
          {...register('lableColor')}
        />
        <label htmlFor="high">
          <svg width="14px" height="14px">
            <use href={sprite + '#radioButtonGray'}></use>
          </svg>
          All
        </label>

        <CustomRadio
          type="radio"
          value="without priority"
          id="withoutPriority"
          clr="gray"
          onClick={chooseBtn}
          checked={radioChoose === 'without priority' ? true : false}
          {...register('lableColor')}
        />
        <label htmlFor="withoutPriority">
          <svg width="14px" height="14px">
            <use href={sprite + '#radioButtonGray'}></use>
          </svg>
          Without
        </label>

        <CustomRadio
          type="radio"
          value="low"
          id="low"
          clr="lilac"
          onClick={chooseBtn}
          checked={radioChoose === 'low' ? true : false}
          {...register('lableColor')}
        />
        <label htmlFor="low">
          <svg width="14px" height="14px">
            <use href={sprite + '#radioButtonLilac'}></use>
          </svg>
          Low
        </label>

        <CustomRadio
          type="radio"
          value="medium"
          id="medium"
          clr="pink"
          onClick={chooseBtn}
          checked={radioChoose === 'medium' ? true : false}
          {...register('lableColor')}
        />
        <label htmlFor="medium">
          <svg width="14px" height="14px">
            <use href={sprite + '#radioButtonPink'}></use>
          </svg>
          Medium
        </label>

        <CustomRadio
          type="radio"
          value="high"
          id="high"
          clr="green"
          onClick={chooseBtn}
          checked={radioChoose === 'high' ? true : false}
          {...register('lableColor')}
        />
        <label htmlFor="high">
          <svg width="14px" height="14px">
            <use href={sprite + '#radioButtonGreen'}></use>
          </svg>
          High
        </label>
      </CustomRadioContainer>
    </>
  );
};

export default FilterModal;
