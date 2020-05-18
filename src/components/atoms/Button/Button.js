import React from 'react';

const Button = ({ children, method }) => <button onClick={() => method()}>{children}</button>;

export const teste = () => {
  console.log('OI');
};


export default Button;
