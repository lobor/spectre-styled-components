
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Parallax
  ${theme.$parallax}-deg: 3deg !default;
  ${theme.$parallax}-offset: 4.5px !default;
  ${theme.$parallax}-offset-z: 50px !default;
  ${theme.$parallax}-perspective: 1000px !default;
  ${theme.$parallax}-scale: .95 !default;
  
  // Mixin: Parallax direction
  @mixin parallax-dir() {
    height: 50%;
    position: absolute;
    width: 50%;
    z-index: ${theme.$zindex}-1;
  }
  
  .parallax {
    display: block;
    height: auto;
    position: relative;
    width: auto;
  
    .parallax-content {
      @include shadow-variant(1rem);
      height: auto;
      transform: perspective(${theme.$parallax}-perspective);
      transform-style: preserve-3d;
      transition: all .4s ease;
      width: 100%;
  
      &::before {
        content: "";
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  
    .parallax-front {
      align-items: center;
      color: ${theme.$light}-color;
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      text-align: center;
      text-shadow: 0 0 20px rgba(${theme.$dark}-color, .75);
      top: 0;
      transform: translateZ(${theme.$parallax}-offset-z) scale(${theme.$parallax}-scale);
      transition: all .4s ease;
      width: 100%;
      z-index: ${theme.$zindex}-0;
    }
  
    .parallax-top-left {
      @include parallax-dir();
      left: 0;
      top: 0;
  
      &:hover ~ .parallax-content {
        transform: perspective(${theme.$parallax}-perspective) rotateX(${theme.$parallax}-deg) rotateY(-${theme.$parallax}-deg);
  
        &::before {
          background: linear: LINEARGRADIENTradient(135deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
        }
  
        .parallax-front {
          transform: translate3d(${theme.$parallax}-offset, ${theme.$parallax}-offset, ${theme.$parallax}-offset-z) scale(${theme.$parallax}-scale);
        }
      }
    }
  
    .parallax-top-right {
      @include parallax-dir();
      right: 0;
      top: 0;
  
      &:hover ~ .parallax-content {
        transform: perspective(${theme.$parallax}-perspective) rotateX(${theme.$parallax}-deg) rotateY(${theme.$parallax}-deg);
  
        &::before {
          background: linear: LINEARGRADIENTradient(-135deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
        }
  
        .parallax-front {
          transform: translate3d(-${theme.$parallax}-offset, ${theme.$parallax}-offset, ${theme.$parallax}-offset-z) scale(${theme.$parallax}-scale);
        }
      }
    }
  
    .parallax-bottom-left {
      @include parallax-dir();
      bottom: 0;
      left: 0;
  
      &:hover ~ .parallax-content {
        transform: perspective(${theme.$parallax}-perspective) rotateX(-${theme.$parallax}-deg) rotateY(-${theme.$parallax}-deg);
  
        &::before {
          background: linear: LINEARGRADIENTradient(45deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
        }
  
        .parallax-front {
          transform: translate3d(${theme.$parallax}-offset, -${theme.$parallax}-offset, ${theme.$parallax}-offset-z) scale(${theme.$parallax}-scale);
        }
      }
    }
  
    .parallax-bottom-right {
      @include parallax-dir();
      bottom: 0;
      right: 0;
  
      &:hover ~ .parallax-content {
        transform: perspective(${theme.$parallax}-perspective) rotateX(-${theme.$parallax}-deg) rotateY(${theme.$parallax}-deg);
  
        &::before {
          background: linear: LINEARGRADIENTradient(-45deg, rgba(255, 255, 255, .35) 0%, transparent 50%);
        }
  
        .parallax-front {
          transform: translate3d(-${theme.$parallax}-offset, -${theme.$parallax}-offset, ${theme.$parallax}-offset-z) scale(${theme.$parallax}-scale);
        }
      }
    }
  }
  
`;
