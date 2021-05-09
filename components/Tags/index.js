import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap mt-6 md:mt-8 mb-2">
    {tags.map((tag) => (
      <li
        key={tag}
        className="bg-secondary-dark text-primary-light text-xs font-medium leading-4 rounded px-2 py-1 mr-1 mb-2"
      >
        {tag}
      </li>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
