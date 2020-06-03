import React from 'react';
import { Button as ButtonBase } from 'antd'

const Button = ({ isLoading, children, method, type }) => (
  <ButtonBase
    type="primary"
    loading={isLoading}
    htmlType={type || 'Button'}
    onClick={() => method && method()}
  >
    {children}
  </ButtonBase>
);


export default Button;
