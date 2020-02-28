import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Row, Col } from './utility/flex-grid';
import { Margin } from './utility/spacing';
import Section from './utility/section';
import Divider from './utility/divider';
import MicroProfileLogo from '../images/microprofile.svg';
import KFServing from '../images/kfserving.png';

const StyledProjects = styled(Section)`
  padding-top: 5em;
  padding-bottom: 2em;

  h2 {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  h5 {
    margin-bottom: 1em;
    font-weight: 600;
  }

  h6 {
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
  <StyledProjects>
    <h2>Projects</h2>
    <h5>Personal Projects & Open Source Contributions</h5>
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
            src={KFServing}
            style={{ width: '100%' }}
            alt="KubeFlow Serving"
          />
        </Col>
        <Col>
          <h6>KFServing</h6>
          <p>
            KFServing provides a Kubernetes Custom Resource Definition for
            serving machine learning (ML) models on arbitrary frameworks. It
            aims to solve production model serving use cases by providing
            performant, high abstraction interfaces for common ML frameworks
            like Tensorflow, XGBoost, ScikitLearn, PyTorch, and ONNX.
          </p>
          <Margin top="1em">
            <Tag>Python</Tag>
            <Tag>Go</Tag>
            <Tag>Kubernetes</Tag>
            <Tag>Istio</Tag>
            <Tag>Knative</Tag>
          </Margin>
        </Col>
      </Row>
    </Margin>
  </StyledProjects>
);
