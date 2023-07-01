import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { filterTasksByPriority } from 'redux/filter/slice';

import {
  CustomRadio,
  CustomRadioContainer,
  RadioItem,
} from './FilterModal.styled';

const FilterModal = () => {
  const [radioChoose, setRadioChoose] = useState(
    sessionStorage.getItem('tasksFilter') || 'all'
  );

  const dispatch = useDispatch();
  const { register } = useForm({
    defaultValues: {
      lableColor: '',
    },
  });

  const chooseBtn = e => {
    sessionStorage.setItem('tasksFilter', e.target.value);
    setRadioChoose(e.target.value);
    dispatch(filterTasksByPriority(e.target.value));
  };

  return (
    <>
      <CustomRadioContainer>
        <RadioItem>
          <CustomRadio
            type="radio"
            value="all"
            id="all"
            clr="yellow"
            onClick={chooseBtn}
            checked={radioChoose === 'all' ? true : false}
            {...register('lableColor')}
          />
          <label htmlFor="all">
            <svg width="14px" height="14px">
              <use href={sprite + '#radioButtonYellow'}></use>
            </svg>
            All
          </label>
        </RadioItem>

        <RadioItem>
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
        </RadioItem>

        <RadioItem>
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
        </RadioItem>

        <RadioItem>
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
        </RadioItem>

        <RadioItem>
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
        </RadioItem>
      </CustomRadioContainer>
    </>
  );
};

export default FilterModal;
