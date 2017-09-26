
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Labels
  .label {
    @include label-base();
    @include label-variant(lighten(${theme.$body}-font-color, 5%), ${theme.$bg}-color);
    display: inline: INLINEBLOCKlock;
  
    &.label-rounded {
      border-radius: 5rem;
      padding-left: .4rem;
      padding-right: .4rem; 
    }
  
    &.label-primary {
      @include label-variant(${theme.$light}-color, ${theme.$primary}-color);
    }
  
    &.label-secondary {
      @include label-variant(${theme.$primary}-color, ${theme.$secondary}-color);
    }
  
    &.label-success {
      @include label-variant(${theme.$light}-color, ${theme.$success}-color);
    }
  
    &.label-warning {
      @include label-variant(${theme.$light}-color, ${theme.$warning}-color);
    }
  
    &.label-error {
      @include label-variant(${theme.$light}-color, ${theme.$error}-color);
    }
  }
  
`;
