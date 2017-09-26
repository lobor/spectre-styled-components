
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Off canvas menus
  .off-canvas {
    display: flex;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
  
    .off-canvas-sidebar {
      background: ${theme.$bg}-color;
      height: 100%;
      left: 0;
      padding: ${theme.$layout}-spacing-lg;
      position: absolute;
      top: 0;
      transform: translateX(-100%);
      transition: transform .25s ease;
      width: 10rem;
      z-index: ${theme.$zindex}-3;
    }
  
    .off-canvas-content {
      flex: 1 1 auto;
      overflow-y: auto;
      padding: ${theme.$layout}-spacing-lg ${theme.$layout}-spacing-lg ${theme.$layout}-spacing-lg 4rem;
    }
  
    .off-canvas-checkbox {
      &:checked ~ .off-canvas-sidebar {
        transform: translateX(0);
      }
  
      &:checked ~ .off-canvas-toggle {
        background: rgba(${theme.$dark}-color, .1);
        border-color: transparent;
        border-radius: 0;
        bottom: 0;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
  
        .icon {
          display: none;
        }
      }
    }
  
    .off-canvas-toggle {
      display: block;
      left: ${theme.$layout}-spacing-lg;
      padding-left: 0;
      padding-right: 0;
      position: absolute;
      top: ${theme.$layout}-spacing-lg;
      transition: none;
      width: ${theme.$control}-size-lg;
      z-index: ${theme.$zindex}-2;
    }
  }
  
  // Responsive layout
  @media (min-width: ${theme.$size}-lg) {
    .off-canvas {
      .off-canvas-sidebar {
        flex: 0 0 auto;
        position: static;
        transform: translateX(0);
      }
  
      .off-canvas-content {
        padding-left: ${theme.$layout}-spacing-lg;
      }
  
      .off-canvas-toggle {
        display: none;
      }
    }
  }
  
`;
