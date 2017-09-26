
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Bars
  .bar {
    background: ${theme.$bg}-color-dark;
    border-radius: ${theme.$border}-radius;
    display: flex;
    flex-wrap: nowrap;
    height: ${theme.$unit}-4;
    width: 100%;
  
    &.bar-sm {
      height: ${theme.$unit}-1;
    }
  
    // TODO: attr() support
    .bar-item {
      background: ${theme.$primary}-color;
      color: ${theme.$light}-color;
      display: block;
      font-size: ${theme.$font}-size-sm;
      flex-shrink: 0;
      line-height: ${theme.$unit}-4;
      height: 100%;
      position: relative;
      text-align: center;
      width: 0;
  
      &:first-child {
        border-bottom-left-radius: ${theme.$border}-radius;
        border-top-left-radius: ${theme.$border}-radius;
      }
      &:last-child {
        border-bottom-right-radius: ${theme.$border}-radius;
        border-top-right-radius: ${theme.$border}-radius;
        flex-shrink: 1;
      }
    }
  }
  
  // Slider bar
  .bar-slider {
    height: ${theme.$border}-width-lg;
    margin: ${theme.$layout}-spacing 0;
    position: relative;
  
    .bar-item {
      left: 0;
      padding: 0;
      position: absolute;
      &:not(:last-child):first-child {
        background: ${theme.$bg}-color-dark;
        z-index: ${theme.$zindex}-0;
      }
    }
  
    .bar-slider-btn {
      background: ${theme.$primary}-color;
      border: 0;
      border-radius: 50%;
      height: ${theme.$unit}-3;
      padding: 0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
      width: ${theme.$unit}-3;
  
      &:active {
        box-shadow: 0 0 0 .1rem ${theme.$primary}-color;
      }
    }
  }
  
`;
