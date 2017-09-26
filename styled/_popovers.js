
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Popovers
  .popover {
    display: inline: INLINEBLOCKlock;
    position: relative;
  
    .popover-container {
      content: attr(data-tooltip);
      opacity: 0;
      left: 50%;
      padding: ${theme.$layout}-spacing;
      position: absolute;
      top: 0;
      transform: translate(-50%, -50%) scale(0);
      transition: transform .2s ease;
      width: ${theme.$control}-max-width;
      z-index: ${theme.$zindex}-4;
    }
  
    :focus + .popover-container,
    &:hover .popover-container,
    .popover-container:hover {
      display: block;
      opacity: 1;
      transform: translate(-50%, -100%) scale(1);
    }
  
    &.popover-right {
      .popover-container {
        left: 100%;
        top: 50%;
      }
  
      :focus + .popover-container,
      &:hover .popover-container,
      .popover-container:hover {
        transform: translate(0, -50%) scale(1);
      }
    }
  
    &.popover-bottom {
      .popover-container {
        left: 50%;
        top: 100%;
      }
  
      :focus + .popover-container,
      &:hover .popover-container,
      .popover-container:hover {
        transform: translate(-50%, 0) scale(1);
      }
    }
  
    &.popover-left {
      .popover-container {
        left: 0;
        top: 50%;
      }
  
      :focus + .popover-container,
      &:hover .popover-container,
      .popover-container:hover {
        transform: translate(-100%, -50%) scale(1);
      }
    }
  
    .card {
      @include shadow-variant(.2rem);
      border: 0;
    }
  }
  
`;
