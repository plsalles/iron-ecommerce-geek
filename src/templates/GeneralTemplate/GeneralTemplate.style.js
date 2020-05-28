import styled from 'styled-components';
import { Layout as LayoutBase } from 'antd';
import { Link as LinkBase } from 'react-router-dom';

export const Layout = styled(LayoutBase)`
  min-height: 100vh;
`;

export const Link = styled(LinkBase)`
  margin-left: 100px;
  color: white;
`;
