import React from 'react';
import styles from './skills.module.css';
import Container from '../Container';
import SkillList from './SkillList';

export default function About() {
  return (
    <div className={styles.skillsBackground}>
      <Container id="skills">
        <div className="pt-20">
          <h2>Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <SkillList
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
            <SkillList
              title="Backend"
              skills={[
                'Node.js',
                'Express',
                'NPM',
                'Python',
                'Java',
                'SQL / NoSQL databases',
              ]}
            />
            <SkillList
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
      </Container>
    </div>
  );
}
