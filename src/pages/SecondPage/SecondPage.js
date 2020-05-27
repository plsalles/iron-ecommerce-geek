import React from 'react';
import { GeneralTemplate } from '../../templates';
import { Redirect } from 'react-router-dom';
import { Form } from '../../components/molecules';

const SecondPage = ({ loggedUser }) => {
  return loggedUser ? (
    <GeneralTemplate>
      NOSSO NOVO CONTEUDO
      <Form />
    </GeneralTemplate>
  ) : <Redirect to="/teste/NAO-AUTORIZADO!" />;
};

export default SecondPage;
