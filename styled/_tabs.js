
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Tabs
  .tab {
    align-items: center;
    border-bottom: ${theme.$border}-width solid ${theme.$border}-color;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: ${theme.$unit}-1 0 (${theme.$unit}-1 - ${theme.$border}-width) 0;
  
    .tab-item {
      margin-top: 0;
  
      &.tab-action {
        flex: 1 0 auto;
        text-align: right;
      }
  
      a {
        border-bottom: ${theme.$border}-width-lg solid transparent;
        color: inherit;
        display: block;
        margin: 0 ${theme.$unit}-2 0 0;
        padding: ${theme.$unit}-2 ${theme.$unit}-1 ${theme.$unit}-2 - ${theme.$border}-width-lg ${theme.$unit}-1;
        text-decoration: none;
        &:focus,
        &:hover {
          color: ${theme.$link}-color;
        }
      }
      &.active a,
      a.active {
        border-bottom-color: ${theme.$primary}-color;
        color: ${theme.$link}-color;
      }
    }
  
    &.tab-block {
      .tab-item {
        flex: 1 0 0;
        text-align: center;
  
        a {
          margin: 0;
        }
  
        .badge {
          &[data-badge]::after {
            position: absolute;
            right: -4px;
            top: -4px;
            transform: translate(0, 0);
          }
        }
      }
    }
  
    &:not(.tab-block) {
      .badge {
        padding-right: 2px;
      }
    }
  }
  
`;
