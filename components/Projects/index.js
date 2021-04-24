import React from 'react';
import styles from './projects.module.css';
import Image from 'next/image';
import cn from 'classnames';

import Container from '../Container';
import Tags from '../Tags';
import Divider from '../Divider';

const tags = {
  js: 'JavaScript',
  ts: 'TypeScript',
  node: 'Node.js',
  react: 'React.js',
  mp: 'MicroProfile',
  vscode: 'VSCode',
  html: 'HTML',
  css: 'CSS',
  java: 'Java',
  gradle: 'Gradle',
};

export default function Projects() {
  return (
    <Container id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.subheading}>Projects & Open Source Contributions</p>
      <div className="reversed-row">
        <div className="col">
          <div className={styles.projectImg}>
            <Image
              src="/images/tools-for-microprofile.png"
              width={1200}
              height={648}
              layout="responsive"
              alt="Your Name"
            />
          </div>
        </div>
        <div className="col">
          <div className={styles.projectAbout}>
            <h6 className={styles.projectName}>
              Eclipse LSP4MP + Tools for MicroProfile
            </h6>
            <p className={styles.projectDescription}>
              <a
                href="https://github.com/eclipse/lsp4mp"
                target="_blank"
                rel="noopener noreferrer"
              >
                LSP4MP
              </a>{' '}
              is a language server that provides core language support for
              MicroProfile APIs, including code complete, diagnostics, snippets
              and more. The Tools for MicroProfile extension leverages LSP4MP to
              provide a rich VS Code editing experience for developers.
            </p>
            <ul className={styles.projectLinks}>
              <li>
                <a
                  href="https://github.com/redhat-developer/vscode-microprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.mp-starter-vscode-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VSMarketplace
                </a>
              </li>
            </ul>
            <Tags
              tags={[tags.ts, tags.node, tags.mp, tags.vscode, tags.java]}
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="row">
        <div className="col">
          <div className={styles.projectImg}>
            <Image
              src="/images/microprofile-starter.png"
              width={1200}
              height={648}
              layout="responsive"
              alt="Your Name"
            />
          </div>
        </div>
        <div className="col">
          <div className={styles.projectAbout}>
            <h6 className={styles.projectName}>
              MicroProfile Starter VSCode Extension
            </h6>
            <p className={styles.projectDescription}>
              The MicroProfile Starter extension provides support for generating
              a MicroProfile Java project with examples based on the{' '}
              <a
                href="https://start.microprofile.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eclipse MicroProfile Starter
              </a>{' '}
              project. You are able to generate a project by choosing a
              MicroProfile version, server and specifications, such as Config,
              Health, Metrics, and more.
            </p>
            <ul className={styles.projectLinks}>
              <li>
                <a
                  href="https://github.com/MicroShed/mp-starter-vscode-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.mp-starter-vscode-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VSMarketplace
                </a>
              </li>
            </ul>
            <Tags tags={[tags.ts, tags.node, tags.mp, tags.vscode]} />
          </div>
        </div>
      </div>
    </Container>
  );
}
