import styled from 'styled-components';
import { Layout as LayoutBase } from 'antd';
import { Link as LinkBase } from 'react-router-dom';

export const Layout = styled(LayoutBase)`
    min-height: 100vh;
    background-image: url(../images/background.png);
    background-position: top;
    background-repeat: no-repeat;
    background-size: unset;
`;

export const Content = styled(LayoutBase.Content)`
    min-width: 40%;
    background-color: white;
    margin: 15vh auto;
    padding: 50px;
    max-height: fit-content;
    box-shadow: 2px 3px 3px rgba(194,190,194,1);
    @media (max-width: 768px) {
        margin: 0;
        box-shadow: none;
        padding: 20px;
        max-height: 100%;
    }
`;

export const Header = styled(LayoutBase.Header)`
    height: fit-content;
`;

export const Link = styled(LinkBase)`
  margin-left: 30px;
  color: white;
`;