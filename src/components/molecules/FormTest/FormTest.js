import React from 'react';
import { FormBase } from './FormTest.style';
import FormSchema from './FormTest.schema';
import { NewInput, Button } from '../../atoms';

const FormTest = () => {
  const initialValues = {
    name: '',
    email: '',
    cellphone: '',
  };

  const submitMethod = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <FormBase
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={submitMethod}
      render={({ handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting, ...rest }) => (
        <form onSubmit={handleSubmit}>
          {console.log(values, errors, touched)}
          <NewInput
            {...rest}
            label="Nome Completo"
            name="name"
            placeholder="Digite o seu nome completo"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            isLoading={isSubmitting}
          />
          <NewInput
            {...rest}
            label="Email"
            name="email"
            placeholder="Digite o seu email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            isLoading={isSubmitting}
          />
          <NewInput
            {...rest}
            label="Celular"
            name="cellphone"
            placeholder="Digite o seu telefone celular"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.cellphone}
            error={errors.cellphone}
            touched={touched.cellphone}
            mask={values.cellphone && "(99)99999-9999"}
            isLoading={isSubmitting}
          />
          <Button type="submit" isLoading={isSubmitting}>Submeter</Button>
        </form>
      )}
    />
  );
};

export default FormTest;
