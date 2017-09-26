
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // Filters
  .filter {
    .filter-nav {
      margin: ${theme.$layout}-spacing 0;
    }
  
    .filter-body {
      display: flex;
      flex-wrap: wrap;
    }
  
    .filter-tag {
      &#tag-all:checked ~ .filter-nav .chip[for="tag-all"],
      &#tag-action:checked ~ .filter-nav .chip[for="tag-action"],
      &#tag-roleplaying:checked ~ .filter-nav .chip[for="tag-roleplaying"],
      &#tag-shooter:checked ~ .filter-nav .chip[for="tag-shooter"],
      &#tag-sports:checked ~ .filter-nav .chip[for="tag-sports"] {
        background: ${theme.$primary}-color;
        color: ${theme.$light}-color;
      }
  
      &#tag-action:checked ~ .filter-body .column:not([data-tag~="tag-action"]),
      &#tag-roleplaying:checked ~ .filter-body .column:not([data-tag~="tag-roleplaying"]),
      &#tag-shooter:checked ~ .filter-body .column:not([data-tag~="tag-shooter"]),
      &#tag-sports:checked ~ .filter-body .column:not([data-tag~="tag-sports"]) {
        display: none;
      }
    }
  }
  
`;
