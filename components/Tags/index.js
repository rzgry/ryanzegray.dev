import React from 'react';
import PropTypes from 'prop-types';
import styles from './tags.module.css';

const Tags = ({ tags }) => (
  <ul className={styles.tags}>
    {tags.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
