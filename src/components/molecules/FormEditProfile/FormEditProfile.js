import React, { Component } from 'react';
import formSchema from './FormEditProfile.schema';
import { FormWrapper } from './FormEditProfile.style';
import { NewInput, Button } from '../../atoms';
import ApiService from '../../../api/service';

class FormEditProfile extends Component {
  state = {
    isUserInfoLoaded: false,
    initialState: {
      name: '',
      email: '',
      password: '',
      telephone: '',
    },
  };

  async componentDidMount () {
    const { name, email, password, telephone } = await ApiService.getUserInfo();

    this.setState({
      initialState: {
        name, email, password, telephone,
      },
      isUserInfoLoaded: true,
    });
  };

  onSubmitMethod = async (values, actions) => {

  };

  render() {
    return this.state.isUserInfoLoaded ? (
      <FormWrapper
        initialValues={this.state.initialState}
        validationSchema={formSchema}
        onSubmit={this.onSubmitMethod}
        enableReinitialize
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, ...props }) => (
          <form onSubmit={handleSubmit}>
            {console.log(values)}
            <NewInput
              {...props}
              name="name"
              label="Nome"
              placeholder="Digite seu nome completo"
              defaultValue={values.name}
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
              defaultValue={values.email}
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
              defaultValue={values.telephone}
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
              defaultValue={values.password}
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
    ) : <h1>Carregando</h1>;
  }
}

export default FormEditProfile;
