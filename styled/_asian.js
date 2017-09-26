
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Optimized for East Asian CJK
  :lang(zh) {
    font-family: ${theme.$cjk}-zh-font-family;
  }
  
  :lang(ja) {
    font-family: ${theme.$cjk}-jp-font-family;
  }
  
  :lang(ko) {
    font-family: ${theme.$cjk}-ko-font-family;
  }
  
  :lang(zh),
  :lang(ja),
  .cjk {
    ins,
    u {
      border-bottom: ${theme.$border}-width solid;
      text-decoration: none;
    }
  
    del + del,
    del + s,
    ins + ins,
    ins + u,
    s + del,
    s + s,
    u + ins,
    u + u {
      margin-left: .125em;
    }
  }
  
`;
