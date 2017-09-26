
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Divider
  .divider,
  .divider-vert {
    display: block;
    position: relative;
  
    &[data-content]::after {
      background: ${theme.$bg}-color-light;
      color: ${theme.$gray}-color;
      content: attr(data-content);
      display: inline: INLINEBLOCKlock;
      font-size: ${theme.$font}-size-sm;
      padding: 0 ${theme.$unit}-2;
      transform: translateY(-${theme.$font}-size-sm + ${theme.$border}-width);
    }
  }
  
  .divider {
    border-top: ${theme.$border}-width solid ${theme.$border}-color;
    height: ${theme.$border}-width;
    margin: ${theme.$unit}-2 0;
  
    &[data-content] {
      margin: ${theme.$unit}-4 0;
    }
  }
  
  .divider-vert {
    display: block;
    padding: ${theme.$unit}-4;
  
    &::before {
      border-left: ${theme.$border}-width solid ${theme.$border}-color;
      bottom: ${theme.$unit}-2;
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: ${theme.$unit}-2;
      transform: translateX(-50%);
    }
  
    &[data-content]::after {
      left: 50%;
      padding: ${theme.$unit}-1 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  
`;
