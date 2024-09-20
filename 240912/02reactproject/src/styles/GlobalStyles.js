import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  :root {
    --main-color: linear-gradient(-75deg, #F9CE34, #EE2A7B, #6228D7),
    
  }
`;



export default GlobalStyles
