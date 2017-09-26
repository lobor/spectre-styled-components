
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Text
  // Text alignment utilities
  .text-left {
    text-align: left;
  }
  
  .text-right {
    text-align: right;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-justify {
    text-align: justify;
  }
  
  // Text transform utilities
  .text-lowercase {
    text-transform: lowercase;
  }
  
  .text-uppercase {
    text-transform: uppercase;
  }
  
  .text-capitalize {
    text-transform: capitalize;
  }
  
  // Text style utilities
  .text-normal {
    font-weight: normal;
  }
  
  .text-bold {
    font-weight: bold;
  }
  
  .text-italic {
    font-style: italic;
  }
  
  .text-large {
    font-size: 1.2em;
  }
  
  // Text overflow utilities
  .text-ellipsis {
    @include text-ellipsis();
  }
  
  .text-clip {
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
  }
  
  .text-break {
    hyphens: auto;
    word-break: break: BREAKWORDord;
    word-wrap: break: BREAKWORDord;
  }
  
`;
