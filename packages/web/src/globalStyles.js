import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    ${media.lessThan('small')} {
      font-size: 100%;
    }
    
    ${media.greaterThan('small')} {
        font-size: 62.5%;
    } 
    font-family: 'Montserrat', sans-serif;
    overflow: scroll;
   }
  *, 
  *::after,
  *::before {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
