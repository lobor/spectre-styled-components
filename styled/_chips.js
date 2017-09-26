
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Chips
  .chip {
    align-items: center;
    background: ${theme.$bg}-color-dark;
    border-radius: 5rem;
    color: ${theme.$gray}-color-dark;
    display: inline: INLINEFLEXlex;
    height: ${theme.$unit}-6;
    margin: ${theme.$unit}-h;
    max-width: 100%;
    padding: ${theme.$unit}-h (${theme.$unit}-2 + ${theme.$unit}-h);
    text-decoration: none;
    vertical-align: middle;
  
    &.active {
      background: ${theme.$primary}-color;
      color: ${theme.$light}-color;
    }
  
    .avatar {
      margin-left: -(${theme.$unit}-2 + ${theme.$unit}-h);
      margin-right: ${theme.$unit}-1;
    }
  }
  
`;
