import { css } from '@emotion/react';
import { injectGlobal } from '@emotion/css';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-style: normal;    
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');    
  }
`;

export const GlobalStyles = css`
  html {
    width: 100vw;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
