
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Tooltips
  .tooltip {
    position: relative;
    &::after {
      background: rgba(${theme.$dark}-color, .9);
      border-radius: ${theme.$border}-radius;
      bottom: 100%;
      color: ${theme.$light}-color;
      content: attr(data-tooltip);
      display: block;
      font-size: ${theme.$font}-size-sm;
      left: 50%;
      max-width: ${theme.$control}-max-width;
      opacity: 0;
      overflow: hidden;
      padding: ${theme.$unit}-1 ${theme.$unit}-2;
      pointer-events: none;
      position: absolute;
      text-overflow: ellipsis;
      transform: translate(-50%, ${theme.$unit}-2);
      transition: all .2s ease;
      white-space: nowrap;
      z-index: ${theme.$zindex}-3;
    }
    &:focus,
    &:hover {
      &::after {
        opacity: 1;
        transform: translate(-50%, -${theme.$unit}-1);
      }
    }
    &[disabled],
    &.disabled {
      pointer-events: auto;
    }
  
    &.tooltip-right {
      &::after {
        bottom: 50%;
        left: 100%;
        transform: translate(-${theme.$unit}-1, 50%);
      }
      &:focus,
      &:hover {
        &::after {
          transform: translate(${theme.$unit}-1, 50%);
        }
      }
    }
  
    &.tooltip-bottom {
      &::after {
        bottom: auto;
        top: 100%;
        transform: translate(-50%, -${theme.$unit}-2);
      }
      &:focus,
      &:hover {
        &::after {
          transform: translate(-50%, ${theme.$unit}-1);
        }
      }
    }
    
    &.tooltip-left {
      &::after {
        bottom: 50%;
        left: auto;
        right: 100%;
        transform: translate(${theme.$unit}-2, 50%);
      }
      &:focus,
      &:hover {
        &::after {
          transform: translate(-${theme.$unit}-1, 50%);
        }
      }
    }
  }
  
`;
