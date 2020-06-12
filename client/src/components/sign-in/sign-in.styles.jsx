import styled from 'styled-components/macro';

export const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
