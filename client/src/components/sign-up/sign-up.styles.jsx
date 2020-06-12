import styled from 'styled-components/macro';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
