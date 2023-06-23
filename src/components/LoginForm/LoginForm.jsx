import AuthBtn from 'components/AuthBtn/AuthBtn';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Input, ShowPassword, Svg } from './LoginForm.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(
        '^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
        'Invalid email format'
      ),
    password: yup
      .string()
      .required('Password is required')
      .matches('^[A-Za-z0-9]{8,64}$', 'Invalid password format'),
  })
  .required();

const LoginForm = () => {
  const {
    register,

    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Enter your email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <div>
            <Input
              type="password"
              placeholder="Confirm a password"
              {...register('password')}
            />
            <ShowPassword onClick={togglePasswordVisiblity}>
              <Svg width="20px" height="20px">
                <use href={sprite + '#eye'}></use>
              </Svg>
            </ShowPassword>
          </div>

          <p>{errors.password?.message}</p>
        </label>
        <AuthBtn textBtn="Register Now" />
      </Form>
    </>
  );
};

export default LoginForm;
