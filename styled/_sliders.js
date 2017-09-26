
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Sliders
  // Credit: https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
  .slider {
    appearance: none;
    background: transparent;
    display: block;
    width: 100%;
    height: ${theme.$unit}-6;
  
    &:focus {
      @include control-shadow();
      outline: none;
    }
  
    // Slider Thumb
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: ${theme.$primary}-color;
      border: 0;
      border-radius: 50%;
      height: ${theme.$unit}-3;
      margin-top: -(${theme.$unit}-3 - ${theme.$unit}-h) / 2;
      transition: transform .2s ease;
      width: ${theme.$unit}-3;
    }
    &::-moz-range-thumb {
      background: ${theme.$primary}-color;
      border: 0;
      border-radius: 50%;
      height: ${theme.$unit}-3;
      transition: transform .2s ease;
      width: ${theme.$unit}-3;
    }
    &::-ms-thumb {
      background: ${theme.$primary}-color;
      border: 0;
      border-radius: 50%;
      height: ${theme.$unit}-3;
      transition: transform .2s ease;
      width: ${theme.$unit}-3;
    }
  
    &:active {
      &::-webkit-slider-thumb {
        transform: scale(1.25);
      }
      &::-moz-range-thumb {
        transform: scale(1.25);
      }
      &::-ms-thumb {
        transform: scale(1.25);
      }
    }
  
    &:disabled,
    &.disabled {
      &::-webkit-slider-thumb {
        background: ${theme.$gray}-color-light;
        transform: scale(1);
      }
      &::-moz-range-thumb {
        background: ${theme.$gray}-color-light;
        transform: scale(1);
      }
      &::-ms-thumb {
        background: ${theme.$gray}-color-light;
        transform: scale(1);
      }
    }
  
    // Slider Track
    &::-webkit-slider-runnable-track {
      background: ${theme.$bg}-color-dark;
      border-radius: ${theme.$border}-radius;
      height: ${theme.$unit}-h;
      width: 100%;
    }
    &::-moz-range-track {
      background: ${theme.$bg}-color-dark;
      border-radius: ${theme.$border}-radius;
      height: ${theme.$unit}-h;
      width: 100%;
    }
    &::-ms-track {
      background: ${theme.$bg}-color-dark;
      border-radius: ${theme.$border}-radius;
      height: ${theme.$unit}-h;
      width: 100%;
    }
    &::-ms-fill-lower {
      background: ${theme.$primary}-color;
    }
  }
  
`;
