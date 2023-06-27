import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { useUserAvatar, useUserName } from 'hooks';
import FormBtn from 'components/FormBtn/FormBtn';
import { editProfile } from 'redux/auth/operations';
import {
  AvatarInput,
  Button,
  DataForm,
  Form,
  Image,
  Input,
  Label,
  LabelAvatar,
  LabelPassword,
  Svg,
  SvgEye,
  Title,
} from './EditProfileForm.styled';

const schema = yup
  .object({
    name: yup
      .string()
      .matches('^[A-Za-z0-9]{2,32}$', 'Invalid name format')
      .trim(),
    email: yup
      .string()
      .matches(
        '^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
        'Invalid email format'
      )
      .trim(),
    password: yup
      .string()
      .matches('^[A-Za-z0-9!@#№$%&]{8,64}$', 'Invalid password format')
      .trim(),
  })
  .required();

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const userAvatar = useUserAvatar();
  const userName = useUserName();

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

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    dispatch(editProfile(formData));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Edit profile</Title>
        <DataForm>
          <LabelAvatar>
            <Image src={userAvatar} alt="user-avatar" />
            <AvatarInput type="file" {...register('file')} />
            <Svg width="10px" height="10px" stroke="black">
              <use href={sprite + '#plus'}></use>
            </Svg>
          </LabelAvatar>
          <Label>
            <Input
              autoComplete="off"
              placeholder={userName}
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </Label>
          <Label>
            <Input placeholder="new email" {...register('email')} />
            <p>{errors.email?.message}</p>
          </Label>

          <LabelPassword>
            <Input
              type={type}
              placeholder="new password"
              autoComplete="off"
              {...register('password')}
            />

            <Button type="button" onClick={handleToggle}>
              <SvgEye width="20px" height="20px">
                <use href={sprite + '#eye'}></use>
              </SvgEye>
            </Button>
            <p>{errors.password?.message}</p>
          </LabelPassword>
        </DataForm>
        <FormBtn textBtn={() => 'Send'} />
      </Form>
    </>
  );
};
export default EditProfileForm;
