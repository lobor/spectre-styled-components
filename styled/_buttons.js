
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Buttons
  .btn {
    @include control-transition();
    appearance: none;
    background: ${theme.$bg}-color-light;
    border: ${theme.$border}-width solid ${theme.$primary}-color;
    border-radius: ${theme.$border}-radius;
    color: ${theme.$primary}-color;
    cursor: pointer;
    display: inline: INLINEBLOCKlock;
    font-size: ${theme.$font}-size;
    height: ${theme.$control}-size;
    line-height: ${theme.$line}-height;
    outline: none;
    padding: ${theme.$control}-padding-v ${theme.$control}-padding-h;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    &:focus {
      @include control-shadow();
    }
    &:focus,
    &:hover {
      background: ${theme.$secondary}-color;
      border-color: ${theme.$primary}-color-dark;
      text-decoration: none;
    }
    &:active,
    &.active {
      background: ${theme.$primary}-color-dark;
      border-color: darken(${theme.$primary}-color-dark, 5%);
      color: ${theme.$light}-color;
      text-decoration: none;
      &.loading {
        &::after {
          border-bottom-color: ${theme.$light}-color;
          border-left-color: ${theme.$light}-color;
        }
      }
    }
    &[disabled],
    &:disabled,
    &.disabled {
      cursor: default;
      opacity: .5;
      pointer-events: none;
    }
  
    // Button Primary
    &.btn-primary {
      background: ${theme.$primary}-color;
      border-color: ${theme.$primary}-color-dark;
      color: ${theme.$light}-color;
      &:focus,
      &:hover {
        background: darken(${theme.$primary}-color-dark, 2%);
        border-color: darken(${theme.$primary}-color-dark, 5%);
        color: ${theme.$light}-color;
      }
      &:active,
      &.active {
        background: darken(${theme.$primary}-color-dark, 4%);
        border-color: darken(${theme.$primary}-color-dark, 7%);
        color: ${theme.$light}-color;
      }
      &.loading {
        &::after {
          border-bottom-color: ${theme.$light}-color;
          border-left-color: ${theme.$light}-color;
        }
      }
    }
  
    // Button Link
    &.btn-link {
      background: transparent;
      border-color: transparent;
      color: ${theme.$link}-color;
      &:focus,
      &:hover,
      &:active,
      &.active {
        color: ${theme.$link}-color-dark;
      }
    }
  
    // Button Sizes
    &.btn-sm {
      font-size: ${theme.$font}-size-sm;
      height: ${theme.$control}-size-sm;
      padding: ${theme.$control}-padding-v-sm ${theme.$control}-padding-h * .75;
    }
  
    &.btn-lg {
      font-size: ${theme.$font}-size-lg;
      height: ${theme.$control}-size-lg;
      padding: ${theme.$control}-padding-v-lg ${theme.$control}-padding-h * 1.25;
    }
  
    // Button Block
    &.btn-block {
      display: block;
      width: 100%;
    }
  
    // Button Action
    &.btn-action {
      width: ${theme.$control}-size;
      padding-left: 0;
      padding-right: 0;
  
      &.btn-sm {
        width: ${theme.$control}-size-sm;
      }
  
      &.btn-lg {
        width: ${theme.$control}-size-lg;
      }
    }
  
    // Button Clear
    &.btn-clear {
      background: transparent;
      border: 0;
      color: currentColor;
      height: ${theme.$unit}-4;
      line-height: ${theme.$unit}-4;
      margin-left: ${theme.$unit}-1;
      margin-right: -2px;
      opacity: .45;
      padding: 0 2px;
      text-decoration: none;
      width: ${theme.$unit}-4;
  
      &:hover {
        opacity: .85;
      }
  
      &::before {
        content: "\2715";
      }
    }
  }
  
  // Button groups
  .btn-group {
    display: inline: INLINEFLEXlex;
    flex-wrap: wrap;
  
    .btn {
      flex: 1 0 auto;
      &:first-child:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
        margin-left: -${theme.$border}-width;
      }
      &:last-child:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin-left: -${theme.$border}-width;
      }
      &:focus,
      &:hover,
      &:active,
      &.active {
        z-index: ${theme.$zindex}-0;
      }
    }
  
    &.btn-group-block {
      display: flex;
  
      .btn {
        flex: 1 0 0;
      }
    }
  }
  
`;
