import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  CustomRadio,
  CustomRadioContainer,
  Form,
  Input,
  TextArea,
  LabelColorBox,
  LabelColorText,
  StyledHeader,
} from './EditCardForm.styled';
import { useState } from 'react';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import sprite from '../../assets/sprite.svg';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import { useDispatch } from 'react-redux';
import { AddCardFormSchema } from 'schemas';
import { parseDate } from 'Helpers/CustomDateFormate';

const EditCardForm = ({ taskInfo, onClose }) => {
  const { title, description, priority, deadline, column, index, owner } =
    taskInfo;
  const [deadlineDate, setDeadlineDate] = useState(
    new Date(parseDate(deadline))
  );
  const [radioChoose, setRadioChoose] = useState(priority);
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      description: description,
      priority: priority,
    },
    resolver: yupResolver(AddCardFormSchema),
  });

  const onSubmit = ({ title, description, lableColor }) => {
    const deadline = new Intl.DateTimeFormat('en-GB').format(deadlineDate);
    const newTask = {
      title,
      description,
      priority: lableColor,
      deadline,
      column,
      index,
      owner,
    };
    console.log(
      '🚀 ~ file: EditCardForm.jsx:48 ~ onSubmit ~ newTask:',
      newTask
    );
    // dispatch(editCard(newTask));
    onClose(false);
  };

  const chooseBtn = e => {
    setRadioChoose(e.target.value);
  };

  return (
    <>
      <StyledHeader>Edit card</StyledHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Title" {...register('title')} />
          <p>{errors.title?.message}</p>
        </label>
        <label>
          <TextArea placeholder="Description" {...register('description')} />
          <p>{errors.description?.message}</p>
        </label>
        <LabelColorBox>
          <LabelColorText>Label color</LabelColorText>
          <CustomRadioContainer>
            <CustomRadio
              type="radio"
              value="without priority"
              id="withoutPriority"
              clr="lilac"
              onClick={chooseBtn}
              checked={radioChoose === 'without priority' ? true : false}
              {...register('lableColor')}
            />
            <label htmlFor="withoutPriority">
              <svg width="14px" height="14px">
                <use href={sprite + '#radioButtonLilac'}></use>
              </svg>
            </label>

            <CustomRadio
              type="radio"
              value="low"
              id="low"
              clr="pink"
              onClick={chooseBtn}
              checked={radioChoose === 'low' ? true : false}
              {...register('lableColor')}
            />
            <label htmlFor="low">
              <svg width="14px" height="14px">
                <use href={sprite + '#radioButtonPink'}></use>
              </svg>
            </label>

            <CustomRadio
              type="radio"
              value="medium"
              id="medium"
              clr="green"
              onClick={chooseBtn}
              checked={radioChoose === 'medium' ? true : false}
              {...register('lableColor')}
            />
            <label htmlFor="medium">
              <svg width="14px" height="14px">
                <use href={sprite + '#radioButtonGreen'}></use>
              </svg>
            </label>

            <CustomRadio
              type="radio"
              value="high"
              id="high"
              clr="gray"
              onClick={chooseBtn}
              checked={radioChoose === 'high' ? true : false}
              {...register('lableColor')}
            />
            <label htmlFor="high">
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

export default EditCardForm;
