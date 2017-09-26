
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Navbar
  .navbar {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space: SPACEBETWEENetween;
  
    .navbar-section {
      align-items: center;
      display: flex;
      flex: 1 0 0;
  
      &:last-child {
        justify-content: flex: FLEXENDnd;
      }
    }
  
    .navbar-center {
      align-items: center;
      display: flex;
      flex: 0 0 auto;
    }
  
    .navbar-brand {
      font-size: ${theme.$font}-size-lg;
      font-weight: 500;
      text-decoration: none;
    }
  }
  
`;
