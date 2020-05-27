import React from 'react';
import formSchema from './Form.schema';
import {FormWrapper } from './Form.style';
import { NewInput, Button } from '../../atoms';

const Form = () => {
  const initialState = {
    name: '',
    email: '',
    cellphone: '',
  };

  const onSubmitMethod = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <FormWrapper
      initialValues={initialState}
      validationSchema={formSchema}
      onSubmit={onSubmitMethod}
      render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (
        <form onSubmit={handleSubmit}>
          <NewInput
            {...props}
            name="name"
            label="Nome"
            placeholder="Digite seu nome completo"
            value={values.name}
            error={errors.name}
            touched={touched.name}
            isLoading={isSubmitting}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="email"
            label="Email"
            placeholder="Digite seu email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            isLoading={isSubmitting}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="cellphone"
            label="Celular"
            placeholder="Digite seu celular"
            mask="(99)99999-9999"
            value={values.cellphone}
            error={errors.cellphone}
            touched={touched.cellphone}
            isLoading={isSubmitting}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <Button type="submit" isLoading={isSubmitting}>Submit</Button>
        </form>
      )}
    />
  );
};

export default Form;
