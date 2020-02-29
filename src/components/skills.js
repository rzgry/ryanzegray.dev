import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from './utility/flex-grid';
import { Margin } from './utility/spacing';
import Section from './utility/section';

const SkillsBackground = styled.div`
  margin-top: 4em;
  margin-bottom: 4em;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryLight};
  padding-top: 1em;
  padding-bottom: 3em;
  position: relative;
  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &:before {
    top: 0;
    transform: skewY(2deg);
    transform-origin: 100% 0;
  }

  &:after {
    bottom: 0;
    transform: skewY(-2deg);
    transform-origin: 100%;
  }
`;

const StyledSkills = styled(Section)`
  padding-top: 5em;
  padding-bottom: 2em;

  h2 {
    font-size: 2.5em;
  }

  h5 {
    font-size: 1.5em;
    margin-bottom: 1em;
    text-decoration: underline;
  }

  li {
    line-height: 1.75em;
  }

  img {
    height: 50px;
  }
`;

const Skill = ({ title, skills }) => (
  <>
    <h5>{title}</h5>
    <ul>
      {skills.map(skill => (
        <li>{skill}</li>
      ))}
    </ul>
  </>
);

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default () => (
  <SkillsBackground>
    <StyledSkills id="skills">
      <h2>Skills</h2>
      <Margin top="1.5em">
        <Row cols={3} mobileBreakpoint="750px">
          <Col>
            <Skill
              title="Frontend"
              skills={[
                'JavaScript (ES6+)',
                'React.js',
                'HTML',
                'CSS',
                'React Native',
                'Redux',
              ]}
            />
          </Col>
          <Col>
            <Skill
              title="Backend"
              skills={[
                'Node.js',
                'Express',
                'NPM',
                'Python',
                'Java',
                'SQL and NoSQL databases',
              ]}
            />
          </Col>
          <Col>
            <Skill
              title="Miscellaneous"
              skills={['Git', 'Docker', 'Cloud computing', 'Agile development']}
            />
          </Col>
        </Row>
      </Margin>
    </StyledSkills>
  </SkillsBackground>
);
