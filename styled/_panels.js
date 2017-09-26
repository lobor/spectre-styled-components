
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Panels
  .panel {
    border: ${theme.$border}-width solid ${theme.$border}-color;
    border-radius: ${theme.$border}-radius;
    display: flex;
    flex-direction: column;
  
    .panel-header,
    .panel-footer {
      flex: 0 0 auto;
      padding: ${theme.$layout}-spacing-lg;
    }
  
    .panel-nav {
      flex: 0 0 auto;
    }
  
    .panel-body {
      flex: 1 1 auto;
      overflow-y: auto;
      padding: 0 ${theme.$layout}-spacing-lg;
    }
  }
  
`;
