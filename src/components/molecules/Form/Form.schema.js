import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(100, 'Máximo de 100 caracteres'),
  email: yup.string()
    .required('Campo obrigatório')
    .email('Formato inválido'),
  cellphone: yup.string()
    .required('Campo obrigatório')
    .min(13, 'Mínimo de 13 caracteres')
    .max(14, 'Máximo de 14 caracteres'),
});

export default formSchema;
