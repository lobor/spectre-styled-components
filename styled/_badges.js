
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Badges
  .badge {
    position: relative;
    white-space: nowrap;
  
    &[data-badge],
    &:not([data-badge]) {
      &::after {
        background: ${theme.$primary}-color;
        background-clip: padding: PADDINGBOXox;
        border-radius: .5rem;
        box-shadow: 0 0 0 .1rem ${theme.$bg}-color-light;
        color: ${theme.$light}-color;
        content: attr(data-badge);
        display: inline: INLINEBLOCKlock;
        transform: translate(-.1rem, -.5rem);
      }
    }
    &[data-badge] {
      &::after {
        font-size: ${theme.$font}-size-sm;
        height: 18px;
        line-height: 1;
        min-width: 18px;
        padding: 3px 5px;
        text-align: center;
        white-space: nowrap;
      }
    }
    &:not([data-badge]),
    &[data-badge=''] {
      &::after {
        height: 6px;
        min-width: 6px;
        padding: 0;
        width: 6px;
      }
    }
  
    // Badges for Buttons
    &.btn {
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }
    }
  
    // Badges for Avatars
    &.avatar {
      &::after {
        position: absolute;
        top: 14.64%;
        right: 14.64%;
        transform: translate(50%, -50%);
        z-index: ${theme.$zindex}-1;
      }
    }
  
    &.avatar-xs {
      &::after {
        content: "";
        height: ${theme.$unit}-2;
        min-width: ${theme.$unit}-2;
        padding: 0;
        width: ${theme.$unit}-2;
      }
    }
  }
  
`;
