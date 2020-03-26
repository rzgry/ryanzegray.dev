import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Row, Col } from './utility/flex-grid';
import { Margin } from './utility/spacing';
import Section from './utility/section';
import Divider from './utility/divider';
import MicroProfileImg from '../images/microprofile.png';
import VoiceAgentImg from '../images/voiceagent.png';
import LibertyDevImg from '../images/openlibertydev.png';
import Tags from './utility/tags';

const tags = {
  js: 'JavaScript',
  ts: 'TypeScript',
  node: 'Node.js',
  react: 'React.js',
  mp: 'MicroProfile',
  vscode: 'VSCode',
  html: 'HTML',
  css: 'CSS',
  java: 'Java',
  gradle: 'Gradle',
};

const StyledProjects = styled(Section)`
  padding-top: 6em;
  padding-bottom: 2em;

  h2 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  h5 {
    margin-bottom: 3em;
  }

  h6 {
    font-weight: 600;
    margin-bottom: 1em;
  }

  p {
    font-size: 0.9em;
  }

  ol {
    display: flex;
    li {
      margin-right: 1em;
    }
  }

  img {
    box-shadow: 0 3px 4px 0 hsla(0, 0%, 0%, 0.2);
    width: 85%;
  }

  @media (max-width: 750px) {
    h6 {
      margin-top: 1.5em;
    }
  }
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 2em;
`;

const ReveredRow = styled(Row)`
  @media (max-width: ${({ mobileBreakpoint = '992px' }) => mobileBreakpoint}) {
    flex-direction: column-reverse;
  }
`;

export default () => (
  <StyledProjects id="projects">
    <h2>Projects</h2>
    <h5>Projects & Open Source Contributions</h5>
    <Margin top="1.5em">
      <ReveredRow cols={2} mobileBreakpoint="750px">
        <Col>
          <h6>MicroProfile Starter VSCode Extension</h6>
          <p>
            The MicroProfile Starter extension provides support for generating a
            MicroProfile Java project with examples based on the{' '}
            <OutboundLink
              href="https://start.microprofile.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eclipse MicroProfile Starter
            </OutboundLink>{' '}
            project. You are able to generate a project by choosing a
            MicroProfile version, server and specifications, such as Config,
            Health, Metrics, and more.
          </p>
          <Margin top="1em">
            <ol>
              <li>
                <OutboundLink
                  href="https://github.com/MicroShed/mp-starter-vscode-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.mp-starter-vscode-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VSMarketplace
                </OutboundLink>
              </li>
            </ol>
          </Margin>
          <Margin top="2em">
            <Tags tags={[tags.ts, tags.node, tags.mp, tags.vscode]} />
          </Margin>
        </Col>
        <Col>
          <img src={MicroProfileImg} alt="Eclipse MicroProfile logo" />
        </Col>
      </ReveredRow>
      <StyledDivider />
      <Row cols={2} mobileBreakpoint="750px">
        <Col>
          <img src={VoiceAgentImg} alt="Voice Agent dashboard" />
        </Col>
        <Col>
          <h6>Voice Agent with Watson Dashboard</h6>
          <p>
            Voice Agent with Watson enhances your call center operations by
            orchestrating Watson services and integrating them with the
            telephone network. Your voice agent can listen and respond to
            customers using natural language.
          </p>
          <Margin top="1em">
            <ol>
              <li>
                <OutboundLink
                  href="https://cloud.ibm.com/catalog/services/voice-agent-with-watson#about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IBM Cloud
                </OutboundLink>
              </li>
            </ol>
          </Margin>
          <Margin top="2em">
            <Tags
              tags={[tags.js, tags.react, tags.node, tags.html, tags.css]}
            />
          </Margin>
        </Col>
      </Row>
      <StyledDivider />
      <ReveredRow cols={2} mobileBreakpoint="750px">
        <Col>
          <h6>Open Liberty dev mode</h6>
          <p>
            Open Liberty development mode, or dev mode, allows you to develop
            applications with any text editor or IDE by providing hot reload and
            deployment, on demand testing, and debugger support. Your code is
            automatically compiled and deployed to your running server, making
            it easy to iterate on your changes. You can run tests on demand or
            even automatically so that you can get immediate feedback on your
            changes.
          </p>
          <Margin top="1em">
            <ol>
              <li>
                <OutboundLink
                  href="https://github.com/openliberty/ci.gradle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://openliberty.io/blog/2020/03/11/gradle-dev-mode-open-liberty.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog Post
                </OutboundLink>
              </li>
            </ol>
          </Margin>
          <Margin top="2em">
            <Tags tags={[tags.java, tags.gradle, tags.mp]} />
          </Margin>
        </Col>
        <Col>
          <img src={LibertyDevImg} alt="Voice Agent dashboard" />
        </Col>
      </ReveredRow>
    </Margin>
  </StyledProjects>
);
