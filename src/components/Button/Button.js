import React from 'react';

const Button = ({ children, method }) => <button onClick={() => method()}>{children}</button>;

export default Button;
