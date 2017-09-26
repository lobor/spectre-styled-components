
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Pagination
  .pagination {
    display: flex;
    list-style: none;
    margin: ${theme.$unit}-1 0;
    padding: ${theme.$unit}-1 0;
  
    .page-item {
      margin: ${theme.$unit}-1 ${theme.$unit}-o;
  
      span {
        display: inline: INLINEBLOCKlock;
        padding: ${theme.$unit}-1 ${theme.$unit}-1;
      }
  
      a {
        border-radius: ${theme.$border}-radius;
        color: ${theme.$gray}-color-dark;
        display: inline: INLINEBLOCKlock;
        padding: ${theme.$unit}-1 ${theme.$unit}-2;
        text-decoration: none;
        &:focus,
        &:hover {
          color: ${theme.$primary}-color;
        }
      }
  
      &.disabled {
        a {
          cursor: default;
          opacity: .5;
          pointer-events: none;
        }
      }
  
      &.active {
        a {
          background: ${theme.$primary}-color;
          color: ${theme.$light}-color;
        }
      }
  
      &.page-prev,
      &.page-next {
        flex: 1 0 50%;
      }
  
      &.page-next {
        text-align: right;
      }
  
      .page-item-title {
        margin: 0;
      }
  
      .page-item-subtitle {
        margin: 0;
        opacity: .5;
      }
    }
  }
  
`;
