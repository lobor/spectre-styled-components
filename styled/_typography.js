
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Typography
  // Headings
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .25em;
    margin-top: 0;
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-weight: 500;
  }
  h1,
  .h1 {
    font-size: 2rem;
  }
  h2,
  .h2 {
    font-size: 1.6rem;
  }
  h3,
  .h3 {
    font-size: 1.4rem;
  }
  h4,
  .h4 {
    font-size: 1.2rem;
  }
  h5,
  .h5 {
    font-size: 1rem;
  }
  h6,
  .h6 {
    font-size: .8rem;
  }
  
  // Paragraphs
  p {
    line-height: 1.2 * ${theme.$line}-height;
    margin: 0 0 ${theme.$unit}-4;
  }
  
  // Semantic text elements
  a,
  ins,
  u {
    text-decoration-skip: ink edges;
  }
  
  abbr[title] {
    border-bottom: ${theme.$border}-width dotted;
    cursor: help;
    text-decoration: none;
  }
  
  kbd {
    @include label-base();
    @include label-variant(${theme.$light}-color, ${theme.$dark}-color);
    font-size: .65rem;
  }
  
  mark {
    @include label-variant(${theme.$body}-font-color, ${theme.$highlight}-color);
    border-radius: ${theme.$border}-radius;
    padding: .05rem;
  }
  
  // Blockquote
  blockquote {
    border-left: ${theme.$border}-width-lg solid ${theme.$border}-color;
    margin-left: 0;
    padding: ${theme.$unit}-2 ${theme.$unit}-4;
  
    p:last-child {
      margin-bottom: 0;
    }
  }
  
  // Lists
  ul,
  ol {
    margin: ${theme.$unit}-4 0 ${theme.$unit}-4 ${theme.$unit}-4;
    padding: 0;
  
    ul,
    ol {
      margin: ${theme.$unit}-4 0 ${theme.$unit}-4 ${theme.$unit}-4;
    }
  
    li {
      margin-top: ${theme.$unit}-2;
    }
  }
  
  ul {
    list-style: disc inside;
  
    ul {
      list-style-type: circle;
    }
  }
  
  ol {
    list-style: decimal inside;
  
    ol {
      list-style-type: lower: LOWERALPHAlpha;
    }
  }
  
  dl {
    dt {
      font-weight: bold;
    }
    dd {
      margin: ${theme.$unit}-2 0 ${theme.$unit}-4 0;
    }
  }
  
`;
