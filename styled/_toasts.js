
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Toasts
  .toast {
    @include toast-variant(${theme.$dark}-color);
    border: ${theme.$border}-width solid ${theme.$dark}-color;
    border-radius: ${theme.$border}-radius;
    color: ${theme.$light}-color;
    display: block;
    padding: ${theme.$layout}-spacing;
    width: 100%;
  
    &.toast-primary {
      @include toast-variant(${theme.$primary}-color);
    }
  
    &.toast-success {
      @include toast-variant(${theme.$success}-color);
    }
  
    &.toast-warning {
      @include toast-variant(${theme.$warning}-color);
    }
  
    &.toast-error {
      @include toast-variant(${theme.$error}-color);
    }
  
    a {
      color: ${theme.$light}-color;
      text-decoration: underline;
      
      &:focus,
      &:hover,
      &:active,
      &.active {
        opacity: .75;
      }
    }
  
    .btn-clear {
      margin: 2px -2px 2px 4px;
    }
  }
  
`;
