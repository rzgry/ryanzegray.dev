import React from 'react';

export default function SkillList({ title, skills, className }) {
  return (
    <div className={className}>
      <h5 className="mt-8 mb-4">{title}</h5>
      <ul>
        {skills.map((skill) => (
          <li className="leading-7" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
