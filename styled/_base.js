
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Base
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border: BORDERBOXox;
    font-size: ${theme.$html}-font-size;
    line-height: ${theme.$html}-line-height;
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    background: ${theme.$body}-bg;
    color: ${theme.$body}-font-color;
    font-family: ${theme.$body}-font-family;
    font-size: ${theme.$font}-size;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }
  
  a {
    color: ${theme.$link}-color;
    outline: none;
    text-decoration: none;
  
    &:focus {
      @include control-shadow();
    }
  
    &:focus,
    &:hover,
    &:active,
    &.active {
      color: ${theme.$link}-color-dark;
      text-decoration: underline;
    }
  }
  
`;
