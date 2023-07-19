import * as yup from 'yup';

export const TitleSchema = yup
    .object({
        title: yup.string().required('Title is required'),
    })
    .required();
