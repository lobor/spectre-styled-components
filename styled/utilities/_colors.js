
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Text colors
  @include text-color-variant(".text-primary", ${theme.$primary}-color);
  
  @include text-color-variant(".text-secondary", ${theme.$secondary}-color-dark);
  
  @include text-color-variant(".text-gray", ${theme.$gray}-color);
  
  @include text-color-variant(".text-light", ${theme.$light}-color);
  
  @include text-color-variant(".text-success", ${theme.$success}-color);
  
  @include text-color-variant(".text-warning", ${theme.$warning}-color);
  
  @include text-color-variant(".text-error", ${theme.$error}-color);
  
  // Background colors
  @include bg-color-variant(".bg-primary", ${theme.$primary}-color);
  
  @include bg-color-variant(".bg-secondary", ${theme.$secondary}-color);
  
  @include bg-color-variant(".bg-dark", ${theme.$dark}-color);
  
  @include bg-color-variant(".bg-gray", ${theme.$bg}-color);
  
  @include bg-color-variant(".bg-success", ${theme.$success}-color);
  
  @include bg-color-variant(".bg-warning", ${theme.$warning}-color);
  
  @include bg-color-variant(".bg-error", ${theme.$error}-color);
  
`;
