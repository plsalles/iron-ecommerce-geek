import React from 'react';
import { FormTemplate } from '../../templates';
import { FormSignup } from '../../components/molecules';

const Signup = props => {
  return (
    <FormTemplate>
      NOSSO NOVO CONTEUDO
      <FormSignup {...props} />
    </FormTemplate>
  );
};

export default Signup;
