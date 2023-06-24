import FormBtn from 'components/FormBtn/FormBtn';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Form,
  Input,
  LabelInput,
  LabelTextaria,
  Textaria,
  Title,
} from './HelpForm.styled';

const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(
        '^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
        'Invalid email format'
      ),
    comment: yup.string().required('Comment is required'),
  })
  .required();

const HelpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      comment: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };
  const textBtn = 'Send';

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Need help</Title>
        <LabelInput>
          <Input placeholder="Email address " {...register('email')} />
          <p>{errors.email?.message}</p>
        </LabelInput>
        <label>
          <textarea placeholder="Comment" {...register('comment')} />
          <p>{errors.comment?.message}</p>
        </label>
        <FormBtn textBtn={textBtn} />
      </Form>
    </>
  );
};
export default HelpForm;
