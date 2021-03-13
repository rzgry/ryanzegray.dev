import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ScrollToAnchorLink = ({ targetElementId, text }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(targetElementId));
  }, [targetElementId]);

  function handleClick(event) {
    event.preventDefault();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <a
      href={`#${targetElementId}`}
      onClick={handleClick}
      ariaLabel={`Scroll to ${targetElementId}`}
    >
      {text}
    </a>
  );
};

ScrollToAnchorLink.propTypes = {
  targetElementId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ScrollToAnchorLink;
