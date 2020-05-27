import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ styles }) => {
    console.log(styles)
    return styles === 'primary' ? 'green' : 'blue'}}
  }
`;
