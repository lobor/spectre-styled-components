
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Autocomplete
  .form-autocomplete {
    position: relative;
  
    .form-autocomplete-input {
      align-content: flex: FLEXSTARTtart;
      display: flex;
      flex-wrap: wrap;
      height: auto;
      min-height: ${theme.$unit}-8;
      padding: ${theme.$unit}-h;
  
      &.is-focused {
        @include control-shadow();
        border-color: ${theme.$primary}-color;
      }
  
      .form-input {
        border-color: transparent;
        box-shadow: none;
        display: inline: INLINEBLOCKlock;
        flex: 1 0 auto;
        height: ${theme.$unit}-6;
        line-height: ${theme.$unit}-4;
        margin: ${theme.$unit}-h;
        width: auto;
      }
    }
  
    .menu {
      left: 0;
      position: absolute;
      top: 100%;
      width: 100%;
    }
  }
  
`;
