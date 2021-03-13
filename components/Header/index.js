import React from 'react';
import ScrollToAnchorLink from '../ScrollToAnchorLink';
import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="/">
            RZ
          </a>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <ScrollToAnchorLink targetElementId="about" text="About" />
            </li>
            <li className={styles.navItem}>
              <ScrollToAnchorLink targetElementId="skills" text="Skills" />
            </li>
            <li className={styles.navItem}>
              <ScrollToAnchorLink targetElementId="projects" text="Projects" />
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerOffset} />
    </>
  );
}
