import React from 'react';
import { AuthForm } from '../../components/atoms';
import './AuthTemplate.css';

import { Layout } from 'antd';

const { Header, Content } = Layout;

function AuthTemplate ({children}) {

    return (
        <div>
            <Layout>
                <Header className='header-container'></Header>
                <Content className='content-container'>
                    {children}
                </Content>
            </Layout>
        </div>
    );
}


export default AuthTemplate;
