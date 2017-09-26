
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Carousels
  .carousel {
    background: ${theme.$bg}-color;
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
  
    .carousel-container {
      height: 100%;
      left: 0;
      position: relative;
      &::before {
        content: "";
        display: block;
        padding-bottom: 56.25%;
      }
  
      .carousel-item {
        animation: carousel: CAROUSELSLIDEOUTlideout 1s ease-in-out 1;
        height: 100%;
        left: 0;
        margin: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
  
        &:hover {
          .item-prev,
          .item-next {
            opacity: 1;
          }
        }
      }
  
      .item-prev,
      .item-next {
        background: rgba(${theme.$gray}-color-light, .25);
        border-color: rgba(${theme.$gray}-color-light, .5);
        color: ${theme.$gray}-color-light;
        opacity: 0;
        position: absolute;
        top: 50%;
        transition: all .4s ease;
        transform: translateY(-50%);
        z-index: ${theme.$zindex}-2;
      }
      .item-prev {
        left: 1rem;
      }
      .item-next {
        right: 1rem;
      }
    }
  
    .carousel-locator {
      &:nth-of-type(1):checked ~ .carousel-container .carousel-item:nth-of-type(1),
      &:nth-of-type(2):checked ~ .carousel-container .carousel-item:nth-of-type(2),
      &:nth-of-type(3):checked ~ .carousel-container .carousel-item:nth-of-type(3),
      &:nth-of-type(4):checked ~ .carousel-container .carousel-item:nth-of-type(4) {
        animation: carousel: CAROUSELSLIDEINlidein .75s ease-in-out 1;
        opacity: 1;
        z-index: ${theme.$zindex}-1;
      }
      &:nth-of-type(1):checked ~ .carousel-nav .nav-item:nth-of-type(1),
      &:nth-of-type(2):checked ~ .carousel-nav .nav-item:nth-of-type(2),
      &:nth-of-type(3):checked ~ .carousel-nav .nav-item:nth-of-type(3),
      &:nth-of-type(4):checked ~ .carousel-nav .nav-item:nth-of-type(4) {
        color: ${theme.$gray}-color-light;
      }
    }
  
    .carousel-nav {
      bottom: ${theme.$layout}-spacing;
      display: flex;
      justify-content: center;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      width: 10rem;
      z-index: ${theme.$zindex}-2;
  
      .nav-item {
        color: rgba(${theme.$gray}-color-light, .5);
        display: block;
        flex: 1 0 auto;
        height: ${theme.$unit}-8;
        margin: ${theme.$unit}-1;
        max-width: 2.5rem;
        position: relative;
  
        &::before {
          background: currentColor;
          content: "";
          display: block;
          height: ${theme.$border}-width-lg;
          position: absolute;
          top: .5rem;
          width: 100%;
        }
      }
    }
  }
  
  @keyframes carousel-slidein {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  @keyframes carousel-slideout {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
  
`;
