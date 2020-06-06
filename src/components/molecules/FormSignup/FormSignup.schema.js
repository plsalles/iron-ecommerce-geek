import * as yup from 'yup';

const phoneRegex = /^\(\d{2,3}\)\d{4,5}-\d{4}$/;

const formSchema = yup.object().shape({
  name: yup.string()
    .required('Campo obrigatório')
    .min(3, 'Mínimo de 3 caracteres')
    .max(100, 'Máximo de 100 caracteres'),
  email: yup.string()
    .required('Campo obrigatório')
    .email('Formato inválido'),
  telephone: yup.string()
    .required('Campo obrigatório')
    .matches(phoneRegex, 'Formato Inválido')
    .min(13, 'Mínimo de 13 caracteres')
    .max(14, 'Máximo de 14 caracteres'),
  password: yup.string()
    .required('Campo obrigatório')
    .min(5, 'Mínimo de 5 caracteres')
    .max(100, 'Máximo de 100 caracteres'),
});

export default formSchema;
