import React from 'react';
import { Layout, Link, Content, Header } from './FormTemplate.style';

const FormTemplate = ({ children }) => {
    return (
        <Layout>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 3 }}>
                    <Link to="/"><img src="images/icon.png" alt="hero icon" /></Link>
                </Header>
                <Content className="site-layout-background">
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default FormTemplate;