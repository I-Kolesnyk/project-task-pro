import FormBtn from 'components/FormBtn/FormBtn';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage, Form, Input, Textarea, Title } from './HelpForm.styled';

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

        <Input placeholder="Email address " {...register('email')} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Textarea placeholder="Comment" {...register('comment')}></Textarea>
        <ErrorMessage>{errors.comment?.message}</ErrorMessage>

        <FormBtn textBtn={textBtn} />
      </Form>
    </>
  );
};
export default HelpForm;
