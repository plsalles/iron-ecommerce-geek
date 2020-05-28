import React from 'react';
import { AuthForm } from '../../components/atoms';
import './AuthTemplate.css';

import { Layout } from 'antd';

const { Header, Content } = Layout;

function AuthTemplate () {

    return (
        <div>
            <Layout>
                <Header className='header-container'></Header>
                <Content className='content-container'>
                    <div className='form-align'>
                        <AuthForm />
                    </div>
                </Content>
            </Layout>
        </div>
    );
}


export default AuthTemplate;
