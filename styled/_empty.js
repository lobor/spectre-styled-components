
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Empty states (or Blank slates)
  .empty {
    background: ${theme.$bg}-color;
    border-radius: ${theme.$border}-radius;
    color: ${theme.$gray}-color-dark;
    text-align: center;
    padding: 4 * ${theme.$layout}-spacing;
  
    .empty-icon {
      margin-bottom: ${theme.$layout}-spacing-lg;
    }
  
    .empty-title,
    .empty-subtitle {
      margin: ${theme.$layout}-spacing auto;
    }
  
    .empty-action {
      margin-top: ${theme.$layout}-spacing-lg;
    }
  }
  
`;
