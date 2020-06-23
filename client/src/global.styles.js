import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

body {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    
    padding: 10px;
  }
}

img {
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #000;
}
ul {
  list-style: none;
}
`;
