
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Meters
  // Credit: https://css-tricks.com/html5-meter-element/
  .meter {
    appearance: none;
    background: ${theme.$bg}-color;
    border: 0;
    border-radius: ${theme.$border}-radius;
    display: block;
    width: 100%;
    height: ${theme.$unit}-4;
  
    &::-webkit-meter-inner-element {
      display: block;
    }
  
    &::-webkit-meter-bar,
    &::-webkit-meter-optimum-value,
    &::-webkit-meter-suboptimum-value,
    &::-webkit-meter-even-less-good-value {
      border-radius: ${theme.$border}-radius;
    }
  
    &::-webkit-meter-bar {
      background: ${theme.$bg}-color;
    }
  
    &::-webkit-meter-optimum-value {
      background: ${theme.$success}-color;
    }
  
    &::-webkit-meter-suboptimum-value {
      background: ${theme.$warning}-color;
    }
  
    &::-webkit-meter-even-less-good-value {
      background: ${theme.$error}-color;
    }
  
    &::-moz-meter-bar,
    &:-moz-meter-optimum,
    &:-moz-meter-sub-optimum,
    &:-moz-meter-sub-sub-optimum {
      border-radius: ${theme.$border}-radius;
    }
  
    &:-moz-meter-optimum::-moz-meter-bar {
      background: ${theme.$success}-color;
    }
  
    &:-moz-meter-sub-optimum::-moz-meter-bar {
      background: ${theme.$warning}-color;
    }
  
    &:-moz-meter-sub-sub-optimum::-moz-meter-bar {
      background: ${theme.$error}-color;
    }
  }
  
`;
