
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Navs
  .nav {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: ${theme.$unit}-1 0;
  
    .nav-item {
      a {
        color: ${theme.$gray}-color-dark;
        padding: ${theme.$unit}-1 ${theme.$unit}-2;
        text-decoration: none;
        &:focus,
        &:hover {
          color: ${theme.$primary}-color;
        }
      }
      &.active {
        & > a {
          color: darken(${theme.$gray}-color-dark, 10%);
          font-weight: bold;
          &:focus,
          &:hover {
            color: ${theme.$primary}-color;
          }
        }
      }
    }
  
    & .nav {
      margin-bottom: ${theme.$unit}-2;
      margin-left: ${theme.$unit}-4;
    }
  }
  
`;
