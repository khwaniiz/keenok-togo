import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
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
