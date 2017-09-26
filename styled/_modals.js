
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Modals
  .modal {
    align-items: center;
    bottom: 0;
    display: none;
    justify-content: center;
    left: 0;
    opacity: 0;
    overflow: hidden;
    padding: ${theme.$layout}-spacing;
    position: fixed;
    right: 0;
    top: 0;
  
    &:target,
    &.active {
      display: flex;
      opacity: 1;
      z-index: ${theme.$zindex}-4;
  
      .modal-overlay {
        background: rgba(${theme.$bg}-color, .75);
        bottom: 0;
        cursor: default;
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
  
      .modal-container {
        animation: slide: SLIDEDOWNown .2s ease 1;
        max-width: 640px;
        z-index: ${theme.$zindex}-0;
      }
    }
  
    &.modal-sm {
      .modal-container {
        max-width: ${theme.$control}-max-width;
      }
    }
  }
  
  .modal-container {
    @include shadow-variant(.2rem);
    background: ${theme.$bg}-color-light;
    border-radius: ${theme.$border}-radius;
    display: block;
    padding: 0;
    text-align: left;
  
    .modal-header {
      padding: ${theme.$layout}-spacing-lg;
  
      .modal-title {
        margin: 0;
      }
    }
  
    .modal-body {
      max-height: 50vh;
      overflow-y: auto;
      padding: ${theme.$layout}-spacing-lg;
      position: relative;
    }
  
    .modal-footer {
      padding: ${theme.$layout}-spacing-lg;
      text-align: right;
    }
  }
  
`;
