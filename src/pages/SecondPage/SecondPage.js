import React from 'react';
import { FormTemplate } from '../../templates';
import { Redirect } from 'react-router-dom';
import { Form } from '../../components/molecules';

const SecondPage = ({ loggedUser }) => {
  return loggedUser ? (
    <FormTemplate>
      NOSSO NOVO CONTEUDO
      <Form />
    </FormTemplate>
  ) : <Redirect to="/teste/NAO-AUTORIZADO!" />;
};

export default SecondPage;
