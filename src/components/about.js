import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Row, Col } from './utility/flex-grid';
import { Margin, Padding } from './utility/spacing';
import Social from './social';

const StyledBio = styled.article`
  padding-top: 6em;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: auto;

  h1 {
    font-size: 3em;
    font-weight: 700;
    line-height: 1.5em;
  }

  h4 {
    font-size: 1.5em;
    padding-bottom: 0.5em;
  }

  .desc {
    padding-top: 2em;
  }

  @media screen and (max-width: 700px) {
    padding-top: 1em;
  }
`;

export default () => (
  <StyledBio>
    <Row cols={2}>
      <Col>
        <h4>Hello, I&#39;m</h4>
        <h1>
          Ryan Zegray{' '}
          <span role="img" aria-label="Wave emoji">
            👋
          </span>
        </h1>
      </Col>
      <Col>
        <Padding top="3.5em">
          <p>
            I am a Software Developer from Toronto, Canada. Currently I work at
            IBM working on developer experience for{' '}
            <OutboundLink
              href="https://openliberty.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Liberty
            </OutboundLink>
            . Previously I worked on{' '}
            <OutboundLink
              href="https://cloud.ibm.com/catalog/services/voice-agent-with-watson#about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voice Agent with Watson
            </OutboundLink>{' '}
            for IBM Cloud. I graduated in April of 2019 with a degree in
            computer science from Western University.
          </p>
          <br />
          <p>
            I am passionate about web technologies, cloud and open source. If
            you’re interested in working together, or just feel like connecting,{' '}
            <a href="#contact">let’s get in touch.</a>
          </p>
          <Margin top="2em">
            <Social />
          </Margin>
        </Padding>
      </Col>
    </Row>
  </StyledBio>
);
