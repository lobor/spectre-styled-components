
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Breadcrumbs
  .breadcrumb {
    list-style: none;
    margin: ${theme.$unit}-1 0;
    padding: ${theme.$unit}-1 0;
  
    .breadcrumb-item {
      color: ${theme.$gray}-color-dark;
      display: inline: INLINEBLOCKlock;
      margin: 0;
      padding: ${theme.$unit}-1 0;
  
      &:not(:last-child) {
        margin-right: ${theme.$unit}-1;
  
        a {
          color: ${theme.$gray}-color-dark;
        }
      }
  
      &:not(:first-child) {
        &::before {
          color: ${theme.$gray}-color-light;
          content: "/";
          padding-right: ${theme.$unit}-1;
        }
      }
    }
  }
  
`;
