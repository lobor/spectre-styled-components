
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Tiles
  .tile {
    align-content: space: SPACEBETWEENetween;
    align-items: flex: FLEXSTARTtart;
    display: flex;
  
    .tile-icon,
    .tile-action {
      flex: 0 0 auto;
    }
    .tile-content {
      flex: 1 1 auto;
      &:not(:first-child) {
        padding-left: ${theme.$unit}-2;
      }
      &:not(:last-child) {
        padding-right: ${theme.$unit}-2;
      }
    }
    .tile-title,
    .tile-subtitle {
      line-height: ${theme.$line}-height;
    }
  
    &.tile-centered {
      align-items: center;
  
      .tile-content {
        overflow: hidden;
      }
  
      .tile-title,
      .tile-subtitle {
        @include text-ellipsis();
        margin-bottom: 0;
      }
    }
  }
  
`;
