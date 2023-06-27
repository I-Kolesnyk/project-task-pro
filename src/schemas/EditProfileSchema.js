import * as yup from 'yup';


export const EditProfileSchema = yup
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


