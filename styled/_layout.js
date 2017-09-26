
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Layout
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.$layout}-spacing;
    padding-right: ${theme.$layout}-spacing;
    width: 100%;
    @extend .clearfix;
  
    ${theme.$grid}-spacing: (${theme.$layout}-spacing / (${theme.$layout}-spacing * 0 + 1)) * ${theme.$html}-font-size;
  
    &.grid-xl {
      max-width: ${theme.$grid}-spacing * 2 + ${theme.$size}-xl;
    }
  
    &.grid-lg {
      max-width: ${theme.$grid}-spacing * 2 + ${theme.$size}-lg;
    }
  
    &.grid-md {
      max-width: ${theme.$grid}-spacing * 2 + ${theme.$size}-md;
    }
  
    &.grid-sm {
      max-width: ${theme.$grid}-spacing * 2 + ${theme.$size}-sm;
    }
  
    &.grid-xs {
      max-width: ${theme.$grid}-spacing * 2 + ${theme.$size}-xs;
    }
  }
  
  // Responsive breakpoint system
  .show-xs,
  .show-sm,
  .show-md,
  .show-lg,
  .show-xl {
    display: none !important;
  }
  
  // Responsive grid system
  .columns {
    display: flex;
    flex-wrap: wrap;
    margin-left: -${theme.$layout}-spacing;
    margin-right: -${theme.$layout}-spacing;
  
    &.col-gapless {
      margin-left: 0;
      margin-right: 0;
  
      & > .column {
        padding-left: 0;
        padding-right: 0;
      }
    }
    &.col-oneline {
      flex-wrap: nowrap;
      overflow-x: auto;
    }
  }
  .column {
    flex: 1;
    max-width: 100%;
    padding-left: ${theme.$layout}-spacing;
    padding-right: ${theme.$layout}-spacing;
  
    &.col-12,
    &.col-11,
    &.col-10,
    &.col-9,
    &.col-8,
    &.col-7,
    &.col-6,
    &.col-5,
    &.col-4,
    &.col-3,
    &.col-2,
    &.col-1 {
      flex: none;
    }
  }
  .col-12 {
    width: 100%;
  }
  .col-11 {
    width: 91.66666667%;
  }
  .col-10 {
    width: 83.33333333%;
  }
  .col-9 {
    width: 75%;
  }
  .col-8 {
    width: 66.66666667%;
  }
  .col-7 {
    width: 58.33333333%;
  }
  .col-6 {
    width: 50%;
  }
  .col-5 {
    width: 41.66666667%;
  }
  .col-4 {
    width: 33.33333333%;
  }
  .col-3 {
    width: 25%;
  }
  .col-2 {
    width: 16.66666667%;
  }
  .col-1 {
    width: 8.33333333%;
  }
  .col-auto {
    flex: 0 0 auto;
    max-width: none;
    width: auto;
  }
  .col-mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .col-ml-auto {
    margin-left: auto;
  }
  .col-mr-auto {
    margin-right: auto;
  }
  @media (max-width: ${theme.$size}-xl) {
    .col-xl-12,
    .col-xl-11,
    .col-xl-10,
    .col-xl-9,
    .col-xl-8,
    .col-xl-7,
    .col-xl-6,
    .col-xl-5,
    .col-xl-4,
    .col-xl-3,
    .col-xl-2,
    .col-xl-1 {
      flex: none;
    }
    .col-xl-12 {
      width: 100%;
    }
    .col-xl-11 {
      width: 91.66666667%;
    }
    .col-xl-10 {
      width: 83.33333333%;
    }
    .col-xl-9 {
      width: 75%;
    }
    .col-xl-8 {
      width: 66.66666667%;
    }
    .col-xl-7 {
      width: 58.33333333%;
    }
    .col-xl-6 {
      width: 50%;
    }
    .col-xl-5 {
      width: 41.66666667%;
    }
    .col-xl-4 {
      width: 33.33333333%;
    }
    .col-xl-3 {
      width: 25%;
    }
    .col-xl-2 {
      width: 16.66666667%;
    }
    .col-xl-1 {
      width: 8.33333333%;
    }
    .hide-xl {
      display: none !important;
    }
    .show-xl {
      display: block !important;
    }
  }
  @media (max-width: ${theme.$size}-lg) {
    .col-lg-12,
    .col-lg-11,
    .col-lg-10,
    .col-lg-9,
    .col-lg-8,
    .col-lg-7,
    .col-lg-6,
    .col-lg-5,
    .col-lg-4,
    .col-lg-3,
    .col-lg-2,
    .col-lg-1 {
      flex: none;
    }
    .col-lg-12 {
      width: 100%;
    }
    .col-lg-11 {
      width: 91.66666667%;
    }
    .col-lg-10 {
      width: 83.33333333%;
    }
    .col-lg-9 {
      width: 75%;
    }
    .col-lg-8 {
      width: 66.66666667%;
    }
    .col-lg-7 {
      width: 58.33333333%;
    }
    .col-lg-6 {
      width: 50%;
    }
    .col-lg-5 {
      width: 41.66666667%;
    }
    .col-lg-4 {
      width: 33.33333333%;
    }
    .col-lg-3 {
      width: 25%;
    }
    .col-lg-2 {
      width: 16.66666667%;
    }
    .col-lg-1 {
      width: 8.33333333%;
    }
    .hide-lg {
      display: none !important;
    }
    .show-lg {
      display: block !important;
    }
  }
  @media (max-width: ${theme.$size}-md) {
    .col-md-12,
    .col-md-11,
    .col-md-10,
    .col-md-9,
    .col-md-8,
    .col-md-7,
    .col-md-6,
    .col-md-5,
    .col-md-4,
    .col-md-3,
    .col-md-2,
    .col-md-1 {
      flex: none;
    }
    .col-md-12 {
      width: 100%;
    }
    .col-md-11 {
      width: 91.66666667%;
    }
    .col-md-10 {
      width: 83.33333333%;
    }
    .col-md-9 {
      width: 75%;
    }
    .col-md-8 {
      width: 66.66666667%;
    }
    .col-md-7 {
      width: 58.33333333%;
    }
    .col-md-6 {
      width: 50%;
    }
    .col-md-5 {
      width: 41.66666667%;
    }
    .col-md-4 {
      width: 33.33333333%;
    }
    .col-md-3 {
      width: 25%;
    }
    .col-md-2 {
      width: 16.66666667%;
    }
    .col-md-1 {
      width: 8.33333333%;
    }
    .hide-md {
      display: none !important;
    }
    .show-md {
      display: block !important;
    }
  }
  @media (max-width: ${theme.$size}-sm) {
    .col-sm-12,
    .col-sm-11,
    .col-sm-10,
    .col-sm-9,
    .col-sm-8,
    .col-sm-7,
    .col-sm-6,
    .col-sm-5,
    .col-sm-4,
    .col-sm-3,
    .col-sm-2,
    .col-sm-1 {
      flex: none;
    }
    .col-sm-12 {
      width: 100%;
    }
    .col-sm-11 {
      width: 91.66666667%;
    }
    .col-sm-10 {
      width: 83.33333333%;
    }
    .col-sm-9 {
      width: 75%;
    }
    .col-sm-8 {
      width: 66.66666667%;
    }
    .col-sm-7 {
      width: 58.33333333%;
    }
    .col-sm-6 {
      width: 50%;
    }
    .col-sm-5 {
      width: 41.66666667%;
    }
    .col-sm-4 {
      width: 33.33333333%;
    }
    .col-sm-3 {
      width: 25%;
    }
    .col-sm-2 {
      width: 16.66666667%;
    }
    .col-sm-1 {
      width: 8.33333333%;
    }
    .hide-sm {
      display: none !important;
    }
    .show-sm {
      display: block !important;
    }
  }
  @media (max-width: ${theme.$size}-xs) {
    .col-xs-12,
    .col-xs-11,
    .col-xs-10,
    .col-xs-9,
    .col-xs-8,
    .col-xs-7,
    .col-xs-6,
    .col-xs-5,
    .col-xs-4,
    .col-xs-3,
    .col-xs-2,
    .col-xs-1 {
      flex: none;
    }
    .col-xs-12 {
      width: 100%;
    }
    .col-xs-11 {
      width: 91.66666667%;
    }
    .col-xs-10 {
      width: 83.33333333%;
    }
    .col-xs-9 {
      width: 75%;
    }
    .col-xs-8 {
      width: 66.66666667%;
    }
    .col-xs-7 {
      width: 58.33333333%;
    }
    .col-xs-6 {
      width: 50%;
    }
    .col-xs-5 {
      width: 41.66666667%;
    }
    .col-xs-4 {
      width: 33.33333333%;
    }
    .col-xs-3 {
      width: 25%;
    }
    .col-xs-2 {
      width: 16.66666667%;
    }
    .col-xs-1 {
      width: 8.33333333%;
    }
    .hide-xs {
      display: none !important;
    }
    .show-xs {
      display: block !important;
    }
  }
  
`;
