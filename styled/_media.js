
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Media
  // Image responsive
  .img-responsive {
    display: block;
    height: auto;
    max-width: 100%;
  }
  
  // object-fit support is coming to Microsoft Edge
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/objectfitandobjectposition/
  .img-fit-cover {
    object-fit: cover;
  }
  
  .img-fit-contain {
    object-fit: contain;
  }
  
  // Video responsive
  .video-responsive {
    display: block;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
    &::before {
      content: "";
      display: block;
      padding-bottom: 56.25%; // Default ratio 16:9, you can calculate this value by dividing 9 by 16
    }
  
    iframe,
    object,
    embed {
      border: 0;
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
  }
  
  video.video-responsive {
    height: auto;
    max-width: 100%;
  
    &::before {
      content: none;
    }
  }
  
  .video-responsive-4-3 {
    &::before {
      padding-bottom: 75%; // Ratio 4:3
    }
  }
  
  .video-responsive-1-1 {
    &::before {
      padding-bottom: 100%; // Ratio 1:1
    }
  }
  
  // Figure
  .figure {
    margin: 0 0 ${theme.$layout}-spacing 0;
  
    .figure-caption {
      color: ${theme.$gray}-color-dark;
      margin-top: ${theme.$layout}-spacing;
    }
  }
  
`;
