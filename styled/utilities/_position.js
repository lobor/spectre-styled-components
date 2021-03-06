
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Position
  .clearfix {
    @include clearfix();
  }
  
  .float-left {
    float: left !important;
  }
  
  .float-right {
    float: right !important;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .fixed {
    position: fixed;
  }
  
  .centered {
    display: block;
    float: none;
    margin-left: auto;
    margin-right: auto;
  }
  
  .flex-centered {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  // Spacing
  @include margin-variant(0, 0);
  
  @include margin-variant(1, ${theme.$unit}-1);
  
  @include margin-variant(2, ${theme.$unit}-2);
  
  @include padding-variant(0, 0);
  
  @include padding-variant(1, ${theme.$unit}-1);
  
  @include padding-variant(2, ${theme.$unit}-2);
  
`;
