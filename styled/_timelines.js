
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Timelines
  .timeline {
    .timeline-item {
      display: flex;
      margin-bottom: ${theme.$unit}-6;
      position: relative;
      &::before {
        background: ${theme.$border}-color;
        content: "";
        height: 100%;
        left: 11px;
        position: absolute;
        top: ${theme.$unit}-6;
        width: 2px;
      }
  
      .timeline-left {
        flex: 0 0 auto;
      }
  
      .timeline-content {
        flex: 1 1 auto;
        padding: 2px 0 2px ${theme.$layout}-spacing-lg;
      }
  
      .timeline-icon {
        border-radius: 50%;
        color: ${theme.$light}-color;
        display: block;
        height: ${theme.$unit}-6;
        text-align: center;
        width: ${theme.$unit}-6;
        &::before {
          border: ${theme.$border}-width-lg solid ${theme.$primary}-color;
          border-radius: 50%;
          content: "";
          display: block;
          height: ${theme.$unit}-2;
          left: ${theme.$unit}-2;
          position: absolute;
          top: ${theme.$unit}-2;
          width: ${theme.$unit}-2;
        }
  
        &.icon-lg {
          background: ${theme.$primary}-color;
          font-size: ${theme.$font}-size-lg;
          line-height: ${theme.$line}-height;
          &::before {
            content: none;
          }
        }
      }
    }
  }
  
`;
