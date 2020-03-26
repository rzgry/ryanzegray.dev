import React, { useState, useEffect } from 'react';

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
    <li>
      <a
        href={`#${targetElementId}`}
        onClick={handleClick}
        ariaLabel={`Scroll to ${targetElementId}`}
      >
        {text}
      </a>
    </li>
  );
};

export default ScrollToAnchorLink;
