import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const Section = styled.article`
  padding: 1em 1em 1em 1em;
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: auto;
`;

export default Section;
