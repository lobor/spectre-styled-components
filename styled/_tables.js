
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Tables
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    width: 100%;
  
    &.table-striped {
      tbody {
        tr:nth-of-type(odd) {
          background: ${theme.$bg}-color;
        }
      }
    }
  
    &.table-hover {
      tbody {
        tr {
          &:hover {
            background: ${theme.$bg}-color-dark;
          }
        }
      }
    }
  
    &,
    &.table-striped {
      tbody {
        tr {
          &.active {
            background: ${theme.$bg}-color-dark;
          }
        }
      }
    }
  
    td,
    th {
      border-bottom: ${theme.$border}-width solid ${theme.$border}-color;
      padding: ${theme.$unit}-3 ${theme.$unit}-2;
    }
    th {
      border-bottom-width: ${theme.$border}-width-lg;
    }
  }
  
`;
