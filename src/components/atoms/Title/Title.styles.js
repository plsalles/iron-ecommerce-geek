import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ styles }) => {
    return styles === 'primary' ? 'green' : 'blue'}}
  }
`;
