import FormBtn from 'components/FormBtn/FormBtn';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Form, Input, Textarea, Title } from './HelpForm.styled';
import { HelpSchema } from 'schemas';
import { userNeedHelp } from 'redux/auth/operations';

const HelpForm = () => {
  const dispatch = useDispatch();

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
    resolver: yupResolver(HelpSchema),
    mode: 'onChange',
  });

  const onSubmit = data => {
    data.message = data.comment;
    delete data.comment;
    dispatch(userNeedHelp(data));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Need help</Title>

        <Input placeholder="Email address " {...register('email')} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Textarea placeholder="Comment" {...register('comment')}></Textarea>
        <ErrorMessage>{errors.comment?.message}</ErrorMessage>

        <FormBtn textBtn={() => 'Send'} />
      </Form>
    </>
  );
};
export default HelpForm;
