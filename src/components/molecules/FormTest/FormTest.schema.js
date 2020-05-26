import * as yup from 'yup';

const formTestSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Campo com no mínimo 3 caracteres')
    .max(100, 'Campo com no máximo 100 caracteres')
    .required('Campo obrigatório'),
  email: yup.string()
    .required('Campo obrigatório')
    .matches()
    .email('Formato inválido'),
  cellphone: yup.string()
    .min(13, 'Campo com no mínimo 13 caracteres')
    .max(14, 'Campo com no máximo 14 caracteres')
    .required('Campo obrigatório'),
});

export default formTestSchema;
