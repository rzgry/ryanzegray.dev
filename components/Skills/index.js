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
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:justify-between">
            <SkillList
              title="Languages"
              skills={['JavaScript', 'TypeScript', 'Python', 'Ruby', 'Java']}
            />
            <SkillList
              title="Frontend"
              skills={[
                'React.js',
                'Redux',
                'Next.js',
                'HTML',
                'CSS',
                'React Native',
              ]}
            />
            <SkillList
              title="Backend"
              skills={['Node.js', 'Express', 'Rails', 'SQL / NoSQL ']}
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
