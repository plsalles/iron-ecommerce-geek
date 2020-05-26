import React from 'react';
import { GeneralTemplate } from '../../templates';
import { Redirect } from 'react-router-dom';
import { FormTest } from '../../components/molecules';

const SecondPage = ({ loggedUser }) => {
  return loggedUser ? (
    <GeneralTemplate>
      NOSSO NOVO CONTEUDO
      <FormTest />  
    </GeneralTemplate>
  ) : <Redirect to="/teste/NAO-AUTORIZADO!" />;
};

export default SecondPage;
