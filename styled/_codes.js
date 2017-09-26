
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Codes
  code {
    @include label-base();
    @include label-variant(${theme.$code}-color, lighten(${theme.$code}-color, 33%));
    font-size: .65rem;
  }
  
  .code {
    border-radius: ${theme.$border}-radius;
    color: ${theme.$body}-font-color;
    line-height: ${theme.$line}-height;
    position: relative;
  
    &::before {
      color: ${theme.$gray}-color;
      content: attr(data-lang);
      font-size: ${theme.$font}-size-sm;
      position: absolute;
      right: ${theme.$layout}-spacing;
      top: ${theme.$unit}-h;
    }
  
    code {
      background: ${theme.$bg}-color;
      color: inherit;
      display: block;
      line-height: inherit;
      overflow-x: auto;
      padding: 1rem;
      width: 100%;
    }
  }
  
`;
