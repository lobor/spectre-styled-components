
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Animations
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-${theme.$unit}-8);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
`;
