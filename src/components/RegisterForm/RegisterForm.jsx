import AuthBtn from 'components/AuthBtn/AuthBtn';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { userRegister } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Input, ShowPassword, Svg } from './RegisterForm.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .matches('^[A-Za-z0-9]{2,32}$', 'Invalid name format')
      .trim(),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        '^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
        'Invalid email format'
      )
      .trim(),
    password: yup
      .string()
      .required('Password is required')
      .matches('^[A-Za-z0-9!@#№$%&]{8,64}$', 'Invalid password format')
      .trim(),
  })
  .required();

const RegisterForm = () => {
  const dispatch = useDispatch();
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
    mode: 'onChange',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = data => {
    console.log(data);
    dispatch(userRegister(data));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input placeholder="Enter your name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </label>
        <label>
          <Input placeholder="Enter your email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <div>
            <Input
              type={passwordShown ? 'text' : 'password'}
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

export default RegisterForm;
