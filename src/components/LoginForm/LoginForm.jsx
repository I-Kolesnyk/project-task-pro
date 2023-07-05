import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { userLogin } from 'redux/auth/operations';
import { LoginFormSchema } from 'schemas';
import { Form, Input, ShowPassword, Svg } from './LoginForm.styled';
import AuthBtn from 'components/AuthBtn/AuthBtn';
import sprite from '../../assets/sprite.svg';
import { useIsUserLoading } from 'hooks';
import Loader from 'components/Loader/Loader';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useIsUserLoading();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = data => {
    dispatch(userLogin(data));
    reset();
  };

  return (
    <>
      {isLoading && <Loader />}

      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <AuthBtn textBtn="Log In Now" />
      </Form>
    </>
  );
};

export default LoginForm;
