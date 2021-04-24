import React from 'react';
import styles from './skills.module.css';

export default function SkillSet({ title, skills }) {
  return (
    <>
      <h5 className={styles.subheader}>{title}</h5>
      <ul>
        {skills.map((skill) => (
          <li key={skill} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}
