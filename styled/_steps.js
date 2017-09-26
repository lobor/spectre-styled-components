
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Steps
  .step {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: ${theme.$unit}-1 0;
    width: 100%;
  
    .step-item {
      flex: 1 1 0;
      margin-top: 0;
      min-height: 1rem;
      text-align: center;
      position: relative;
  
      &:not(:first-child)::before {
        background: ${theme.$primary}-color;
        content: "";
        height: 2px;
        left: -50%;
        position: absolute;
        top: 9px;
        width: 100%;
      }
  
      a {
        color: ${theme.$gray}-color;
        display: inline: INLINEBLOCKlock;
        padding: 20px 10px 0;
        text-decoration: none;
  
        &::before {
          background: ${theme.$primary}-color;
          border: ${theme.$border}-width-lg solid ${theme.$light}-color;
          border-radius: 50%;
          content: "";
          display: block;
          height: ${theme.$unit}-3;
          left: 50%;
          position: absolute;
          top: ${theme.$unit}-1;
          transform: translateX(-50%);
          width: ${theme.$unit}-3;
          z-index: ${theme.$zindex}-0;
        }
      }
  
      &.active {
        a {
          &::before {
            background: ${theme.$light}-color;
            border: ${theme.$border}-width-lg solid ${theme.$primary}-color;
          }
        }
  
        & ~ .step-item {
          &::before {
            background: ${theme.$border}-color;
          }
  
          a {
  
            &::before {
              background: ${theme.$gray}-color-light;
            }
          }
        }
      }
    }
  }
  
`;
