import AuthBtn from 'components/AuthBtn/AuthBtn';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
  const onSubmit = data => {
    const newDate = { ...data, startDate };
    console.log(startDate);
    reset();
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
              value="withoutPriority"
              id="withoutPriority"
              clr="lilac"
              {...register('lableColor')}
            />
            <label htmlFor="withoutPriority"></label>

            <CustomRadio
              type="radio"
              value="low"
              id="low"
              clr="pink"
              {...register('lableColor')}
            />
            <label htmlFor="low"></label>

            <CustomRadio
              type="radio"
              value="medium"
              id="medium"
              clr="green"
              {...register('lableColor')}
            />
            <label htmlFor="medium"></label>

            <CustomRadio
              type="radio"
              value="high"
              id="high"
              clr="gray"
              {...register('lableColor')}
            />
            <label htmlFor="high"></label>
          </CustomRadioContainer>
        </LabelColorBox>

        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          customInput={<CustomInput />}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />

        <AuthBtn textBtn="add" />
      </Form>
    </>
  );
};

export default AddCardForm;
