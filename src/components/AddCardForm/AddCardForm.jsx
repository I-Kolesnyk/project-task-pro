import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  CustomRadio,
  CustomRadioContainer,
  Form,
  Input,
  TextArea,
  LabelColorBox,
  LabelColorText,
  StyledHeader,
  ErrorMessage,
} from './AddCardForm.styled';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import sprite from '../../assets/sprite.svg';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import { AddCardFormSchema } from 'schemas';
import { addCard } from 'redux/board/operations';
import { useColumns } from 'hooks';

const AddCardForm = ({ columnId, onClose }) => {
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [radioChoose, setRadioChoose] = useState('without priority');
  const dispatch = useDispatch();
  const columns = useColumns();
  const tasksLength = columns.filter(column => column._id === columnId)[0].tasks
    .length;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      lableColor: '',
    },
    resolver: yupResolver(AddCardFormSchema),
  });

  const onSubmit = ({ title, description, lableColor }) => {
    const deadline = new Intl.DateTimeFormat('en-GB').format(deadlineDate);
    const newTask = description
      ? {
          title,
          description,
          priority: lableColor,
          deadline,
          column: columnId,
          index: tasksLength + 1,
        }
      : {
          title,
          priority: lableColor,
          deadline,
          column: columnId,
          index: tasksLength + 1,
        };

    dispatch(addCard(newTask));
    reset();
    onClose();
  };

  const chooseBtn = e => {
    setRadioChoose(e.target.value);
  };

  return (
    <>
      <StyledHeader>Add card</StyledHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Title" {...register('title')} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </label>
        <label>
          <TextArea placeholder="Description" {...register('description')} />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </label>
        <LabelColorBox>
          <LabelColorText>Label color</LabelColorText>
          <CustomRadioContainer>
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
            </label>
          </CustomRadioContainer>
        </LabelColorBox>
        <div>
          <LabelColorText>Deadline</LabelColorText>
          <CustomDatePicker
            startDeadline={deadlineDate}
            setStartDeadline={setDeadlineDate}
          />
        </div>

        <FormBtn textBtn={() => <ChildComponent textContent="Add" />} />
      </Form>
    </>
  );
};

export default AddCardForm;
