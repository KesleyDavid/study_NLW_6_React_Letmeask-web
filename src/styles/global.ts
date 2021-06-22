import { createGlobalStyle } from 'styled-components';
import media from 'styled-query';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #29292E;
    --shadow: #050206;

    --purple: #835AFD;
    --purple-hover: #6F4BD8;

    --danger: #E73F5D;
    --danger-hover: #D73754;

    --success: #04D361;

    --gray-dark: #737380;
    --gray-medium: #A8A8B3;
    --gray-medium-hover: #7E7E86;
    --gray-light: #DBDCDD;
    --gray-light-hover: #CECECE;

    --white: #FFF;
    --white-background: #FEFEFE;
    --white-details: #F8F8F8;

    --pink-dark: #E559F9;
    --pink-light: #D67EE2;
  }

  html {
    ${media.lessThan('1080px')`
      font-size: 93.75%;
      // default: 16px
      // 16 x 0.9375 = 15px
    `}
    ${media.lessThan('720px')`
      font-size: 87.5%;
    `}
  }

  body {
    background: var(--white-background);
    color: var(--black);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  /* a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: var(--gray-800);
  }

  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  } */
`;