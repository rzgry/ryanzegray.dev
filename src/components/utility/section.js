import styled from 'styled-components';

const Section = styled.article`
  padding: 1em 1em 1em 1em;
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: auto;
`;

export default Section;
