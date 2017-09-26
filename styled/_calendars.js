
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Calendars
  .calendar {
    border: ${theme.$border}-width solid ${theme.$border}-color;
    border-radius: ${theme.$border}-radius;
    display: block;
    min-width: 280px;
    text-align: center;
  
    .calendar-nav {
      align-items: center;
      background: ${theme.$bg}-color;
      border-top-left-radius: ${theme.$border}-radius;
      border-top-right-radius: ${theme.$border}-radius;
      display: flex;
      font-size: ${theme.$font}-size-lg;
      padding: ${theme.$layout}-spacing;
    }
  
    .calendar-header,
    .calendar-body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: ${theme.$layout}-spacing 0;
  
      .calendar-date {
        flex: 0 0 14.28%; // 7 calendar-items each row
        max-width: 14.28%;
      }
    }
  
    .calendar-header {
      background: ${theme.$bg}-color;
      border-bottom: ${theme.$border}-width solid ${theme.$border}-color;
      color: ${theme.$gray}-color;
      font-size: ${theme.$font}-size-sm;
    }
  
    .calendar-body {
      color: ${theme.$gray}-color-dark;
    }
  
    .calendar-date {
      border: 0;
      padding: ${theme.$unit}-1;
  
      .date-item {
        @include control-transition();
        appearance: none;
        background: transparent;
        border: ${theme.$border}-width solid transparent;
        border-radius: 50%;
        color: ${theme.$gray}-color-dark;
        cursor: pointer;
        height: ${theme.$unit}-7;
        line-height: ${theme.$unit}-5;
        outline: none;
        padding: ${theme.$unit}-h;
        position: relative;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        white-space: nowrap;
        width: ${theme.$unit}-7;
  
        &.date-today {
          border-color: ${theme.$secondary}-color-dark;
          color: ${theme.$primary}-color;
        }
  
        &:focus {
          @include control-shadow();
        }
  
        &:focus,
        &:hover {
          background: ${theme.$secondary}-color-light;
          border-color: ${theme.$secondary}-color-dark;
          color: ${theme.$primary}-color;
          text-decoration: none;
        }
        &:active,
        &.active {
          background: ${theme.$primary}-color-dark;
          border-color: darken(${theme.$primary}-color-dark, 5%);
          color: ${theme.$light}-color;
        }
  
        // Calendar badge support
        &.badge {
          &::after {
            position: absolute;
            top: 3px;
            right: 3px;
            transform: translate(50%, -50%);
          }
        }
      }
  
      &.disabled .date-item,
      &.disabled .calendar-event,
      .date-item:disabled,
      .calendar-event:disabled {
        cursor: default;
        opacity: .25;
        pointer-events: none;
      }
    }
  
    .calendar-range {
      position: relative;
  
      &::before {
        background: ${theme.$secondary}-color;
        content: "";
        height: ${theme.$unit}-7;
        left: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &.range-start {
        &::before {
          left: 50%;
        }
      }
      &.range-end {
        &::before {
          right: 50%;
        }
      }
  
      .date-item {
        color: ${theme.$primary}-color;
      }
    }
  
    &.calendar-lg {
      .calendar-body {
        padding: 0;
  
        .calendar-date {
          border-bottom: ${theme.$border}-width solid ${theme.$border}-color;
          border-right: ${theme.$border}-width solid ${theme.$border}-color;
          display: flex;
          flex-direction: column;
          height: 5.5rem;
          padding: 0;
  
          &:nth-child(7n) {
            border-right: 0;
          }
          &:nth-last-child(-n+7) {
            border-bottom: 0;
          }
        }
      }
  
      .date-item {
        align-self: flex: FLEXENDnd;
        height: ${theme.$unit}-7;
        margin-right: ${theme.$layout}-spacing-sm;
        margin-top: ${theme.$layout}-spacing-sm;
      }
  
      .calendar-range {
        &::before {
          top: 19px;
        }
        &.range-start {
          &::before {
            left: auto;
            width: 19px;
          }
        }
        &.range-end {
          &::before {
            right: 19px;
          }
        }
      }
  
      .calendar-events {
        flex-grow: 1;
        line-height: 1;
        overflow-y: auto;
        padding: ${theme.$layout}-spacing-sm;
      }
  
      .calendar-event {
        background: ${theme.$secondary}-color;
        border-radius: ${theme.$border}-radius;
        color: ${theme.$primary}-color;
        font-size: ${theme.$font}-size-sm;
        display: block;
        margin: ${theme.$unit}-h auto;
        overflow: hidden;
        padding: 3px 4px;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  
`;
