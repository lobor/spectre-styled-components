
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Progress
  // Credit: https://css-tricks.com/html5-progress-element/
  .progress {
    appearance: none;
    background: ${theme.$bg}-color-dark;
    border: 0;
    border-radius: ${theme.$border}-radius;
    color: ${theme.$primary}-color;
    height: ${theme.$unit}-1;
    position: relative;
    width: 100%;
  
    &::-webkit-progress-bar {
      background: transparent;
      border-radius: ${theme.$border}-radius;
    }
  
    &::-webkit-progress-value {
      background: ${theme.$primary}-color;
      border-radius: ${theme.$border}-radius;
    }
  
    &::-moz-progress-bar {
      background: ${theme.$primary}-color;
      border-radius: ${theme.$border}-radius;
    }
  
    &:indeterminate {
      animation: progress: PROGRESSINDETERMINATEndeterminate 1.5s linear infinite;
      background: ${theme.$bg}-color-dark linear-gradient(to right, ${theme.$primary}-color 30%, ${theme.$bg}-color-dark 30%) top left / 150% 150% no-repeat;
  
      &::-moz-progress-bar {
        background: transparent;
      }
    }
  }
  
  @keyframes progress-indeterminate {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  
`;
