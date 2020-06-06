import React from 'react';
import formSchema from './FormSignup.schema';
import { FormWrapper } from './FormSignup.style';
import { NewInput, Button } from '../../atoms';
import ApiService from '../../../api/service';

const FormSignup = props => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    telephone: '',
  };

  const onSubmitMethod = async (values, actions) => {
    await ApiService.subscribeUser(values);
    actions.setSubmitting(false);

    props.history.push('/login');

  };

  return (
    <FormWrapper
      initialValues={initialState}
      validationSchema={formSchema}
      onSubmit={onSubmitMethod}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, ...props }) => (
        <form onSubmit={handleSubmit}>
          <NewInput
            {...props}
            name="name"
            label="Nome"
            placeholder="Digite seu nome completo"
            value={values.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
            error={errors.name}
            touched={touched.name}
            />

          <NewInput
            {...props}
            name="email"
            label="Email"
            placeholder="Digite seu email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <NewInput
            {...props}
            name="telephone"
            label="Celular"
            placeholder="Digite seu telefone celular"
            mask="(99)99999-9999"
            value={values.telephone}
            error={errors.telephone}
            touched={touched.telephone}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <NewInput
            {...props}
            name="password"
            label="Senha"
            type="password"
            placeholder="Digite sua senha de acesso"
            value={values.password}
            error={errors.password}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <Button type="submit" isLoading={isSubmitting}>Cadastrar</Button>
        </form>
      )}
    </FormWrapper>
  );
};

export default FormSignup;
