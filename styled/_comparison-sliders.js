
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Image comparison slider
  // Credit: http://codepen.io/solipsistacp/pen/Gpmaq
  .comparison-slider {
    height: 50vh;
    overflow: hidden;
    position: relative;
    width: 100%;
  
    .comparison-before,
    .comparison-after {
      height: 100%;
      left: 0;
      margin: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
  
      img {
        height: 100%;
        object-fit: none;
        object-position: left center;
        position: absolute;
        width: 100%;
      }
    }
  
    .comparison-before {
      width: 100%;
      z-index: 1;
  
      .comparison-label {
        right: ${theme.$unit}-4;
      }
    }
  
    .comparison-after {
      max-width: 100%;
      min-width: 0;
      z-index: 2;
  
      &::before {
        background: transparent;
        content: "";
        cursor: default;
        height: 100%;
        left: 0;
        position: absolute;
        right: ${theme.$unit}-4;
        top: 0;
        z-index: ${theme.$zindex}-0;
      }
  
      &::after {
        background: currentColor;
        border-radius: 50%;
        box-shadow: 0 -5px, 0 5px;
        color: ${theme.$light}-color;
        content: "";
        height: 3px;
        position: absolute;
        right: ${theme.$unit}-2;
        top: 50%;
        transform: translate(50%, -50%);
        width: 3px;
      }
  
      .comparison-label {
        left: ${theme.$unit}-4;
      }
    }
  
    .comparison-resizer {
      animation: first: FIRSTRUNun 1.5s 1 ease-in-out;
      cursor: ew: EWRESIZEesize;
      height: ${theme.$unit}-4;
      left: 0;
      max-width: 100%;
      min-width: ${theme.$unit}-4;
      opacity: 0;
      outline: none;
      position: relative;
      resize: horizontal;
      top: 50%;
      transform: translateY(-50%) scaleY(30);
      width: 0;
    }
  
    .comparison-label {
      background: rgba(${theme.$dark}-color, .5);
      bottom: ${theme.$unit}-4;
      color: ${theme.$light}-color;
      padding: ${theme.$unit}-1 ${theme.$unit}-2;
      position: absolute;
      user-select: none;
    }
  }
  
  @keyframes first-run {
    0% {
      width: 0;
    }
    25% {
      width: ${theme.$unit}-12;
    }
    50% {
      width: ${theme.$unit}-4;
    }
    75% {
      width: ${theme.$unit}-6;
    }
    100% {
      width: 0;
    }
  }
  
`;
