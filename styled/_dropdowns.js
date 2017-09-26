
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Dropdown
  .dropdown {
    display: inline: INLINEBLOCKlock;
    position: relative;
  
    .menu {
      animation: slide: SLIDEDOWNown .15s ease 1;
      display: none;
      left: 0;
      max-height: 50vh;
      overflow-y: auto;
      position: absolute;
      top: 100%;
    }
  
    &.dropdown-right {
      .menu {
        left: auto;
        right: 0;
      }
    }
  
    &.active .menu,
    .dropdown-toggle:focus + .menu,
    .menu:hover {
      display: block;
    }
  
    // Fix dropdown-toggle border radius in button groups
    .btn-group {
      .dropdown-toggle:nth-last-child(2) {
        border-bottom-right-radius: ${theme.$border}-radius;
        border-top-right-radius: ${theme.$border}-radius;
      }
    }
  }
  
`;
