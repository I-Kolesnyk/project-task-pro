import * as yup from 'yup';

export const AddCardFormSchema = yup
  .object({
    title: yup.string().required('Title is required'),
    description: yup.string(),
    lableColor: yup.string().required(''),
  })
  .required();
