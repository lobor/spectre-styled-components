
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Loading
  .loading {
    color: transparent !important;
    min-height: ${theme.$unit}-4;
    pointer-events: none;
    position: relative;
    &::after {
      animation: loading 500ms infinite linear;
      border: ${theme.$border}-width-lg solid ${theme.$primary}-color;
      border-radius: 50%;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      display: block;
      height: ${theme.$unit}-4;
      left: 50%;
      margin-left: -${theme.$unit}-2;
      margin-top: -${theme.$unit}-2;
      position: absolute;
      top: 50%;
      width: ${theme.$unit}-4;
      z-index: ${theme.$zindex}-0;
    }
  
    &.loading-lg {
      min-height: ${theme.$unit}-10;
      &::after {
        height: ${theme.$unit}-8;
        margin-left: -${theme.$unit}-4;
        margin-top: -${theme.$unit}-4;
        width: ${theme.$unit}-8;
      }
    }
  }
  
`;
