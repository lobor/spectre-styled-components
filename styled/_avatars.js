
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Avatars
  .avatar {
    @include avatar-base();
    background: ${theme.$primary}-color;
    border-radius: 50%;
    color: rgba(${theme.$light}-color, .85);
    display: inline: INLINEBLOCKlock;
    font-weight: 300;
    line-height: 1;
    margin: 0;
    position: relative;
    vertical-align: middle;
  
    &.avatar-xs {
      @include avatar-base(${theme.$unit}-4);
    }
    &.avatar-sm {
      @include avatar-base(${theme.$unit}-6);
    }
    &.avatar-lg {
      @include avatar-base(${theme.$unit}-12);
    }
    &.avatar-xl {
      @include avatar-base(${theme.$unit}-16);
    }
  
    img {
      border-radius: 50%;
      height: 100%;
      position: relative;
      width: 100%;
      z-index: ${theme.$zindex}-0;
    }
  
    .avatar-icon,
    .avatar-presence {
      background: ${theme.$bg}-color-light;
      bottom: 14.64%;
      height: 50%;
      padding: ${theme.$border}-width-lg;
      position: absolute;
      right: 14.64%;
      transform: translate(50%, 50%);
      width: 50%;
      z-index: ${theme.$zindex}-0 + 1;
    }
  
    .avatar-presence {
      background: ${theme.$gray}-color;
      box-shadow: 0 0 0 ${theme.$border}-width-lg ${theme.$light}-color;
      border-radius: 50%;
      height: .5em;
      width: .5em;
  
      &.online {
        background: ${theme.$success}-color;
      }
  
      &.busy {
        background: ${theme.$error}-color;
      }
  
      &.away {
        background: ${theme.$warning}-color;
      }
    }
  
    &[data-initial]::before {
      color: currentColor;
      content: attr(data-initial);
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: ${theme.$zindex}-0;
    }
  }
  
`;
