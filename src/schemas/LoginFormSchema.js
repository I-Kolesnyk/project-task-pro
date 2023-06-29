import * as yup from 'yup';

export const LoginFormSchema = yup
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
      .min(8)
      .max(64)
      .matches(
        /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
        'Invalid password format'
      ),
  })
  .required();
