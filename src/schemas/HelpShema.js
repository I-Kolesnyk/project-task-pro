import * as yup from 'yup';

export const HelpSchema = yup
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