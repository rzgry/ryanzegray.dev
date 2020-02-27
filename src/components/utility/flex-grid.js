import styled from 'styled-components';

export const Col = styled.div`
  margin-bottom: 1em;

  /* temp: just for visibility when debugging */
  /* background: red; */
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > ${Col} {
    width: calc(${({ cols = 1 }) => 100 / cols}% - 5px);
    @media (max-width: ${({ mobileBreakpoint = '992px' }) =>
        mobileBreakpoint}) {
      width: 100%;
    }
  }
`;
