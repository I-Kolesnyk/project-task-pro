import * as yup from 'yup';

export const RegisterFormSchema = yup
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
      .min(8)
      .max(64)
      .matches(
        /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
        'Invalid password format'
      )
      .required('Password is required'),
  })
  .required();
