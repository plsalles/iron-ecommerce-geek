import React, { useState } from 'react';
import formSchema from './FormLogin.schema';
import { FormWrapper } from './FormLogin.style';
import { NewInput, Button } from '../../atoms';
import ApiService from '../../../api/service';

const FormLogin = ({ logUser, ...props }) => {
  const [loginApiErrorMessage, setLoginApiErrorMessage] = useState('');
  const initialState = {
    email: '',
    password: '',
  };

  const onSubmitLogin = async (values, action) => {
    try {
      const logged = await ApiService.loginUser(values);
  
      logUser();
  
      localStorage.setItem('logged-user-info', JSON.stringify(logged));
  
      action.setSubmitting(false);
  
      props.history.push('/edit-profile');
    } catch (err) {
      setLoginApiErrorMessage(err.response.data.message);
    }
  };

  return (
    <FormWrapper
      initialValues={initialState}
      validationSchema={formSchema}
      onSubmit={onSubmitLogin}
    >
      {({ values, errors, touched, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <NewInput
            {...props}
            name="email"
            label="Email"
            placeholder="Digite seu email"
            value={values.email}
            error={errors.email || (loginApiErrorMessage && true)}
            touched={touched.email}
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
            error={errors.password || loginApiErrorMessage}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <Button type="submit" isLoading={isSubmitting}>Entrar</Button>
        </form>
      )}
    </FormWrapper>
  );
};

export default FormLogin;
