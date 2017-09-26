
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Cards
  .card {
    background: ${theme.$bg}-color-light;
    border: ${theme.$border}-width solid ${theme.$border}-color;
    border-radius: ${theme.$border}-radius;
    display: flex;
    flex-direction: column;
  
    .card-header,
    .card-body,
    .card-footer {
      padding: ${theme.$layout}-spacing-lg;
      padding-bottom: 0;
  
      &:last-child {
        padding-bottom: ${theme.$layout}-spacing-lg;
      }
    }
  
    .card-image {
      padding-top: ${theme.$layout}-spacing-lg;
  
      &:first-child {
        padding-top: 0;
  
        img {
          border-top-left-radius: ${theme.$border}-radius;
          border-top-right-radius: ${theme.$border}-radius;
        }
      }
  
      &:last-child {
        img {
          border-bottom-left-radius: ${theme.$border}-radius;
          border-bottom-right-radius: ${theme.$border}-radius;
        }
      }
    }
  }
  
`;
