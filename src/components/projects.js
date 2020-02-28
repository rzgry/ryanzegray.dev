import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Row, Col } from './utility/flex-grid';
import { Margin } from './utility/spacing';
import Section from './utility/section';
import Divider from './utility/divider';
import MicroProfileLogo from '../images/microprofile.svg';
import VoiceAgentImg from '../images/voiceagent.png';

const StyledProjects = styled(Section)`
  padding-top: 5em;
  padding-bottom: 2em;

  h2 {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  h5 {
    margin-bottom: 2em;
  }

  h6 {
    font-weight: 600;
    margin-bottom: 1em;
  }

  p {
    font-size: 0.9em;
  }

  li {
    line-height: 2em;
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

const Tag = styled.span`
  background-color: ${({ theme }) => theme.secondaryDark};
  color: ${({ theme }) => theme.primaryLight};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  padding: 6px 8px;
  margin-right: 4px;
`;

export default () => (
  <StyledProjects id="projects">
    <h2>Projects</h2>
    <h5>Personal / Work Projects & Open Source Contributions</h5>
    <Margin top="1.5em">
      <ReveredRow cols={2} mobileBreakpoint="750px">
        <Col>
          <h6>MicroProfile Starter VSCode Extension</h6>
          <p>
            The MicroProfile Starter extension provides support for generating a
            MicroProfile Java project with examples based on the{' '}
            <OutboundLink href="https://start.microprofile.io/">
              Eclipse MicroProfile Starter project
            </OutboundLink>
            . You are able to generate a project by choosing a MicroProfile
            version, server and specifications, such as Config, Health, Metrics,
            and more.
          </p>
          <p>
            <OutboundLink href="https://github.com/MicroShed/mp-starter-vscode-ext">
              GitHub
            </OutboundLink>{' '}
            <OutboundLink href="https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.mp-starter-vscode-ext">
              VSMarketplace
            </OutboundLink>
          </p>
          <Margin top="1em">
            <Tag>TypeScript</Tag>
            <Tag>Node.JS</Tag>
            <Tag>MicroProfile</Tag>
            <Tag>VSCode</Tag>
          </Margin>
        </Col>
        <Col>
          <img
            style={{ width: '100%', maxWidth: '200px' }}
            src={MicroProfileLogo}
            alt="Eclipse MicroProfile logo"
          />
        </Col>
      </ReveredRow>
      <StyledDivider />
      <Row cols={2} mobileBreakpoint="750px">
        <Col>
          <img
            src={VoiceAgentImg}
            style={{ width: '80%' }}
            alt="Voice Agent dashboard"
          />
        </Col>
        <Col>
          <h6>Voice Agent with Watson Dashboard</h6>
          <p>
            Voice Agent with Watson enhances your call center operations by
            orchestrating Watson services and integrating them with the
            telephone network. Your voice agent can listen and respond to
            customers using natural language.
          </p>
          <p>
            <OutboundLink href="https://cloud.ibm.com/catalog/services/voice-agent-with-watson#about">
              IBM Cloud Catalog
            </OutboundLink>
          </p>
          <Margin top="1em">
            <Tag>JavaScript</Tag>
            <Tag>ReactJS</Tag>
            <Tag>NodeJS</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
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
          <p>
            <OutboundLink href="https://github.com/openliberty/ci.gradle">
              GitHub
            </OutboundLink>
          </p>
          <Margin top="1em">
            <Tag>Java</Tag>
            <Tag>Gradle</Tag>
            <Tag>Open Liberty</Tag>
            <Tag>Groovy</Tag>
          </Margin>
        </Col>
        <Col>
          <img
            src={VoiceAgentImg}
            style={{ width: '80%' }}
            alt="Voice Agent dashboard"
          />
        </Col>
      </ReveredRow>
    </Margin>
  </StyledProjects>
);
