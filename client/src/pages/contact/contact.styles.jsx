import styled from 'styled-components/macro';

export const contactContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
