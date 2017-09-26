
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Forms
  .form-group {
    &:not(:last-child) {
      margin-bottom: ${theme.$layout}-spacing;
    }
  }
  
  fieldset {
    margin-bottom: ${theme.$layout}-spacing-lg;
  }
  
  legend {
    font-size: ${theme.$font}-size-lg;
    font-weight: 500;
    margin-bottom: ${theme.$layout}-spacing-lg;
  }
  
  // Form element: Label
  .form-label {
    display: block;
    padding: ${theme.$control}-padding-v + ${theme.$border}-width 0;
  
    &.label-sm {
      padding: ${theme.$control}-padding-v-sm + ${theme.$border}-width 0;
    }
  
    &.label-lg {
      padding: ${theme.$control}-padding-v-lg + ${theme.$border}-width 0;
    }
  }
  
  // Form element: Input
  .form-input {
    @include control-transition();
    appearance: none;
    background: ${theme.$bg}-color-light;
    background-image: none;
    border: ${theme.$border}-width solid ${theme.$border}-color-dark;
    border-radius: ${theme.$border}-radius;
    color: ${theme.$body}-font-color;
    display: block;
    font-size: ${theme.$font}-size;
    height: ${theme.$control}-size;
    line-height: ${theme.$line}-height;
    max-width: 100%;
    outline: none;
    padding: ${theme.$control}-padding-v ${theme.$control}-padding-h;
    position: relative;
    width: 100%;
    &:focus {
      @include control-shadow();
      border-color: ${theme.$primary}-color;
    }
    &::placeholder {
      color: ${theme.$gray}-color;
    }
  
    // Input sizes
    &.input-sm {
      font-size: ${theme.$font}-size-sm;
      height: ${theme.$control}-size-sm;
      padding: ${theme.$control}-padding-v-sm ${theme.$control}-padding-h;
    }
  
    &.input-lg {
      font-size: ${theme.$font}-size-lg;
      height: ${theme.$control}-size-lg;
      padding: ${theme.$control}-padding-v-lg ${theme.$control}-padding-h;
    }
  
    &.input-inline {
      display: inline: INLINEBLOCKlock;
      vertical-align: middle;
      width: auto;
    }
  
    // Input types
    &[type="file"] {
      height: auto;
    }
  }
  
  // Form element: Textarea
  textarea.form-input {
    height: auto;
  }
  
  // Form element: Input hint
  .form-input-hint {
    color: ${theme.$gray}-color;
    font-size: ${theme.$font}-size-sm;
    margin-top: ${theme.$unit}-1;
  
    .has-success &,
    .is-success + & {
      color: ${theme.$success}-color;
    }
  
    .has-error &,
    .is-error + & {
      color: ${theme.$error}-color;
    }
  }
  
  // Form element: Select
  .form-select {
    appearance: none;
    border: ${theme.$border}-width solid ${theme.$border}-color-dark;
    border-radius: ${theme.$border}-radius;
    color: inherit;
    font-size: ${theme.$font}-size;
    height: ${theme.$control}-size;
    line-height: ${theme.$line}-height;
    outline: none;
    padding: ${theme.$control}-padding-v ${theme.$control}-padding-h;
    vertical-align: middle;
    width: 100%;
  
    &[size],
    &[multiple] {
      height: auto;
      
      option {
        padding: ${theme.$unit}-h ${theme.$unit}-1;
      }
    }
    &:not([multiple]):not([size]) {
      background: ${theme.$bg}-color-light url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23667189' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right (${theme.$control}-icon-size / 2) center / .4rem .5rem;
      padding-right: ${theme.$control}-icon-size + ${theme.$control}-padding-h;
    }
    &:focus {
      @include control-shadow();
      border-color: ${theme.$primary}-color;
    }
    &::-ms-expand {
      display: none;
    }
  
    // Select sizes
    &.select-sm {
      font-size: ${theme.$font}-size-sm;
      height: ${theme.$control}-size-sm;
      padding: ${theme.$control}-padding-v-sm (${theme.$control}-icon-size + ${theme.$control}-padding-h) ${theme.$control}-padding-v-sm ${theme.$control}-padding-h;
    }
  
    &.select-lg {
      font-size: ${theme.$font}-size-lg;
      height: ${theme.$control}-size-lg;
      padding: ${theme.$control}-padding-v-lg (${theme.$control}-icon-size + ${theme.$control}-padding-h) ${theme.$control}-padding-v-lg ${theme.$control}-padding-h;
    }
  }
  
  // Form Icons
  .has-icon-left,
  .has-icon-right {
    position: relative;
  
    .form-icon {
      height: ${theme.$control}-icon-size;
      margin: 0 ${theme.$control}-padding-v;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: ${theme.$control}-icon-size;
    }
  }
  
  .has-icon-left {
    .form-icon {
      left: ${theme.$border}-width;
    }
  
    .form-input {
      padding-left: ${theme.$control}-icon-size + ${theme.$control}-padding-v * 2;
    }
  }
  
  .has-icon-right {
    .form-icon {
      right: ${theme.$border}-width;
    }
  
    .form-input {
      padding-right: ${theme.$control}-icon-size + ${theme.$control}-padding-v * 2;
    }
  }
  
  // Form element: Checkbox and Radio
  .form-checkbox,
  .form-radio,
  .form-switch {
    display: inline: INLINEBLOCKlock;
    line-height: ${theme.$line}-height;
    padding: ((${theme.$control}-size-sm - ${theme.$line}-height) / 2)  (${theme.$control}-icon-size + ${theme.$control}-padding-h);
    position: relative;
  
    input {
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      position: absolute;
      width: 1px;
      &:focus + .form-icon {
        @include control-shadow();
        border-color: ${theme.$primary}-color;
      }
      &:checked + .form-icon {
        background: ${theme.$primary}-color;
        border-color: ${theme.$primary}-color;
      }
    }
  
    .form-icon {
      @include control-transition();
      border: ${theme.$border}-width solid ${theme.$border}-color-dark;
      cursor: pointer;
      display: inline: INLINEBLOCKlock;
      position: absolute;
    }
  }
  
  .form-checkbox,
  .form-radio {
    .form-icon {
      background: ${theme.$bg}-color-light;
      height: ${theme.$control}-icon-size;
      left: 0;
      top: (${theme.$control}-size-sm - ${theme.$control}-icon-size) / 2;
      width: ${theme.$control}-icon-size;
    }
  
    input {
      &:active + .form-icon {
        background: ${theme.$bg}-color-dark;
      }
    }
  }
  .form-checkbox {
    .form-icon {
      border-radius: ${theme.$border}-radius;
    }
  
    input {
      &:checked + .form-icon {
        &::before {
          background-clip: padding: PADDINGBOXox;
          border: ${theme.$border}-width-lg solid ${theme.$light}-color;
          border-left-width: 0;
          border-top-width: 0;
          content: "";
          height: 10px;
          left: 50%;
          margin-left: -3px;
          margin-top: -6px;
          position: absolute;
          top: 50%;
          transform: rotate(45deg);
          width: 6px;
        }
      }
      &:indeterminate + .form-icon {
        background: ${theme.$primary}-color;
        border-color: ${theme.$primary}-color;
        &::before {
          background: ${theme.$bg}-color-light;
          content: "";
          height: 2px;
          left: 50%;
          margin-left: -5px;
          margin-top: -1px;
          position: absolute;
          top: 50%;
          width: 10px;
        }
      }
    }
  }
  .form-radio {
    .form-icon {
      border-radius: ${theme.$control}-icon-size / 2;
    }
  
    input {
      &:checked + .form-icon {
        &::before {
          background: ${theme.$bg}-color-light;
          border-radius: ${theme.$border}-radius;
          content: "";
          height: 4px;
          left: 50%;
          margin-left: -2px;
          margin-top: -2px;
          position: absolute;
          top: 50%;
          width: 4px;
        }
      }
    }
  }
  
  // Form element: Switch
  .form-switch {
    padding-left: (${theme.$unit}-8 + ${theme.$control}-padding-h);
  
    .form-icon {
      background: ${theme.$gray}-color-light;
      background-clip: padding: PADDINGBOXox;
      border-radius: ${theme.$unit}-2 + ${theme.$border}-width;
      height: ${theme.$unit}-4 + ${theme.$border}-width * 2;
      left: 0;
      top: (${theme.$control}-size-sm - ${theme.$unit}-4) / 2 - ${theme.$border}-width;
      width: ${theme.$unit}-8;
      &::before {
        @include control-transition();
        background: ${theme.$bg}-color-light;
        border-radius: ${theme.$unit}-2;
        content: "";
        display: block;
        height: ${theme.$unit}-4;
        left: 0;
        position: absolute;
        top: 0;
        width: ${theme.$unit}-4;
      }
    }
  
    input {
      &:checked + .form-icon {
        &::before {
          left: 14px;
        }
      }
      &:active + .form-icon {
        &::before {
          background: ${theme.$bg}-color;
        }
      }
    }
  }
  
  // Form element: Input groups
  .input-group {
    display: flex;
  
    .input-group-addon {
      background: ${theme.$bg}-color;
      border: ${theme.$border}-width solid ${theme.$border}-color-dark;
      border-radius: ${theme.$border}-radius;
      line-height: ${theme.$line}-height;
      padding: ${theme.$control}-padding-v ${theme.$control}-padding-h;
  
      &.addon-sm {
        font-size: ${theme.$font}-size-sm;
        padding: ${theme.$control}-padding-v-sm ${theme.$control}-padding-h;
      }
      &.addon-lg {
        font-size: ${theme.$font}-size-lg;
        padding: ${theme.$control}-padding-v-lg ${theme.$control}-padding-h;
      }
    }
  
    .form-input,
    .form-select {
      flex: 1 1 auto;
    }
  
    .input-group-btn {
      z-index: ${theme.$zindex}-0;
    }
  
    .form-input,
    .form-select,
    .input-group-addon,
    .input-group-btn {
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
      &:focus {
        z-index: ${theme.$zindex}-0 + 1;
      }
    }
  
    .form-select {
      width: auto;
    }
  
    &.input-inline {
      display: inline: INLINEFLEXlex;
    }
  }
  
  // Form validation states
  .form-input,
  .form-select {
    .has-success &,
    &.is-success {
      border-color: ${theme.$success}-color;
      &:focus {
        @include control-shadow(${theme.$success}-color);
      }
    }
  
    .has-error &,
    &.is-error {
      border-color: ${theme.$error}-color;
      &:focus {
        @include control-shadow(${theme.$error}-color);
      }
    }
  }
  
  .form-checkbox,
  .form-radio,
  .form-switch {
    .has-error &,
    &.is-error {
      .form-icon {
        border-color: ${theme.$error}-color;
      }
      
      input {
        &:checked + .form-icon {
          background: ${theme.$error}-color;
          border-color: ${theme.$error}-color;
        }
  
        &:focus + .form-icon {
          @include control-shadow(${theme.$error}-color);
          border-color: ${theme.$error}-color;
        }
      }
    }
  }
  
  // validation based on :placeholder-shown (Edge doesn't support it yet)
  .form-input {
    &:not(:placeholder-shown) {
      &:invalid {
        border-color: ${theme.$error}-color;
        &:focus {
          @include control-shadow(${theme.$error}-color);
        }
  
        & + .form-input-hint {
          color: ${theme.$error}-color;
        }
      }
    }
  }
  
  // Form disabled and readonly
  .form-input,
  .form-select {
    &:disabled,
    &.disabled {
      background-color: ${theme.$bg}-color-dark;
      cursor: not: NOTALLOWEDllowed;
      opacity: .5;
    }
  }
  
  .form-input {
    &[readonly] {
      background-color: ${theme.$bg}-color;
    }
  }
  
  input {
    &:disabled,
    &.disabled {
      & + .form-icon {
        background: ${theme.$bg}-color-dark;
        cursor: not: NOTALLOWEDllowed;
        opacity: .5;
      }
    }
  }
  
  .form-switch {
    input {
      &:disabled,
      &.disabled {
        & + .form-icon::before {
          background: ${theme.$bg}-color-light;
        }
      }
    }
  }
  
  // Form Horizontal
  .form-horizontal {
    padding: ${theme.$layout}-spacing;
  
    .form-group {
      display: flex;
    }
  
    .form-checkbox,
    .form-radio,
    .form-switch {
      margin: (${theme.$control}-size - ${theme.$control}-size-sm) / 2 0;
    }
  }
  
`;
