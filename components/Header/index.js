import React from 'react';
import ScrollToAnchorLink from '../ScrollToAnchorLink';

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <nav className="p-4 flex auto max-w-screen-lg m-auto justify-around md:justify-between items-center">
          <a className="logo" href="/">
            RZ
          </a>
          <ul className="flex">
            <li>
              <ScrollToAnchorLink targetElementId="about" text="About" />
            </li>
            <li className="ml-8">
              <ScrollToAnchorLink targetElementId="skills" text="Skills" />
            </li>
            <li className="ml-8">
              <ScrollToAnchorLink targetElementId="projects" text="Projects" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8" />
    </>
  );
}
