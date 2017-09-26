
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Accordions
  .accordion {
    input:checked ~,
    &[open] {
      & .accordion-header {
        .icon {
          transform: rotate(90deg);
        }
      }
  
      & .accordion-body {
        max-height: 50rem;
      }
    }
  
    .accordion-header {
      display: block;
      padding: ${theme.$unit}-1 ${theme.$unit}-2;
  
      .icon {
        transition: all .2s ease;
      }
    }
  
    .accordion-body {
      margin-bottom: ${theme.$layout}-spacing;
      max-height: 0;
      overflow: hidden;
      transition: max: MAXHEIGHTeight .2s ease;
    }
  }
  
  summary.accordion-header {
    &::-webkit-details-marker {
      display: none;
    }
  }
  
`;
