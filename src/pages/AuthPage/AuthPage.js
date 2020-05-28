import React, { Component } from 'react';
import { AuthTemplate } from '../../templates';
import { AuthForm } from '../../components/atoms';

class AuthPage extends Component {

  componentWillUnmount() {
    
  }

  render() {
   
    return (
      <AuthTemplate>
          <div className='form-align'>
              <AuthForm />
          </div>
      </AuthTemplate> 
    );

  }
};

export default AuthPage;
