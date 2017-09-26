
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Menus
  .menu {
    @include shadow-variant(.05rem);
    background: ${theme.$bg}-color-light;
    border-radius: ${theme.$border}-radius;
    list-style: none;
    margin: 0;
    min-width: ${theme.$control}-min-width;
    padding: ${theme.$unit}-2;
    transform: translateY(${theme.$layout}-spacing-sm);
    z-index: ${theme.$zindex}-1;
  
    &.menu-nav {
      background: transparent;
      box-shadow: none;
    }
  
    .menu-item {
      margin-top: 0;
      padding: 0 ${theme.$unit}-2;
      text-decoration: none;
      user-select: none;
  
      & > a {
        border-radius: ${theme.$border}-radius;
        color: inherit;
        display: block;
        margin: 0 (-${theme.$unit}-2);
        padding: ${theme.$unit}-1 ${theme.$unit}-2;
        text-decoration: none;
        &:focus,
        &:hover {
          background: ${theme.$secondary}-color;
          color: ${theme.$primary}-color;
        }
        &:active,
        &.active {
          background: ${theme.$secondary}-color;
          color: ${theme.$primary}-color;
        }
      }
  
      & + .menu-item {
        margin-top: ${theme.$unit}-1;
      }
    }
  
    .menu-badge {
      float: right;
      padding: ${theme.$unit}-1 0;
  
      .btn {
        margin-top: -${theme.$unit}-h;
      }
    }
  }
  
`;
