import React from 'react';
import styles from './skills.module.css';
import Container from '../Container';
import cn from 'classnames';
import SkillSet from './SkillSet';

export default function About() {
  return (
    <div className={styles.skillsBackground}>
      <Container id="skills">
        <div className={styles.skills}>
          <h2 className={styles.header}>Skills</h2>
          <div className="row">
            <div className={cn('col', styles.skillsColumn)}>
              <SkillSet
                title="Frontend"
                skills={[
                  'JavaScript (ES6+)',
                  'TypeScript',
                  'React.js',
                  'Redux',
                  'HTML',
                  'CSS',
                  'React Native',
                ]}
              />
            </div>
            <div className={cn('col', styles.skillsColumn)}>
              <SkillSet
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
            </div>
            <div className={cn('col', styles.skillsColumn)}>
              <SkillSet
                title="Miscellaneous"
                skills={[
                  'Git',
                  'Docker',
                  'Kubernetes',
                  'Cloud computing',
                  'Agile development',
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
