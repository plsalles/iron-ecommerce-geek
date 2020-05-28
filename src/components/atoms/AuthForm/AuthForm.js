import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AuthForm = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <Form
      className="container-form-atom"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h3 className="welcome-message">Olá</h3>
      <Form.Item

        label="Email ou usuário"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Continuar
        </Button>
      </Form.Item>
    </Form>
  
  );
};

export default AuthForm;