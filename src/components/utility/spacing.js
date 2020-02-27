import styled from 'styled-components';

export const Padding = styled.div`
  padding: ${({ top = 0, right = 0, bottom = 0, left = 0 }) =>
    `${top} ${right} ${bottom} ${left}`};
`;

export const Margin = styled.div`
  margin: ${({ top = 0, right = 0, bottom = 0, left = 0 }) =>
    `${top} ${right} ${bottom} ${left}`};
`;
