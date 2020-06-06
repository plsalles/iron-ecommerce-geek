import React from 'react';
import { FormTemplate } from '../../templates';
import { FormLogin } from '../../components/molecules';

const Signup = props => {
  return (
    <FormTemplate>
      <FormLogin {...props} />
    </FormTemplate>
  );
};

export default Signup;
