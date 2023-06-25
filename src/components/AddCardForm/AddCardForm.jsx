import { useForm } from 'react-hook-form';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import {
  CustomRadio,
  CustomRadioContainer,
  Form,
  Input,
  TextArea,
  LabelColorBox,
  LabelColorText,
} from './AddCardForm.styled';
import { useState } from 'react';
import CustomInput from 'components/CustomDatePicker/CustomInput';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import sprite from '../../assets/sprite.svg';
import { date } from 'yup';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';

// const schema = yup
//   .object({
//     email: yup
//       .string()
//       .required('Email is required')
//       .matches(
//         '^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
//         'Invalid email format'
//       ),
//     password: yup
//       .string()
//       .required('Password is required')
//       .matches('^[A-Za-z0-9]{8,64}$', 'Invalid password format'),
//   })
//   .required();

const AddCardForm = () => {
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
  });
  const [startDate, setStartDate] = useState(new Date());

  const [radioChoose, setRadioChoose] = useState('without');

  const onSubmit = data => {
    const newDate = { ...data, startDate };
    console.log('🚀 ~ file: AddCardForm.jsx:57 ~ onSubmit ~ newDate:', newDate);

    reset();
  };

  const chooseBtn = e => {
    setRadioChoose(e.target.value);
  };

  return (
    <>
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
              value="without"
              id="withoutPriority"
              clr="lilac"
              onClick={chooseBtn}
              checked={radioChoose === 'without' ? true : false}
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
            startDeadline={startDate}
            setStartDeadline={setStartDate}
          />
        </div>

        <FormBtn textBtn={() => <ChildComponent textContent="Add" />} />
      </Form>
    </>
  );
};

export default AddCardForm;
