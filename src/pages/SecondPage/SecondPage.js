import React from 'react';
import { GeneralTemplate } from '../../templates';
import { Redirect } from 'react-router-dom';

const SecondPage = ({ loggedUser }) => {
  return loggedUser ? (
    <GeneralTemplate>
      NOSSO NOVO CONTEUDO
    </GeneralTemplate>
  ) : <Redirect to="/teste/NAO-AUTORIZADO!" />;
};

export default SecondPage;
