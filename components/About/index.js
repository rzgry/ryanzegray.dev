import React from 'react';
import styles from './about.module.css';
import Container from '../Container';
import cn from 'classnames';
import Social from '../Social';

export default function About() {
  return (
    <Container id="about">
      <div className={styles.about}>
        <div className="row">
          <div className="col">
            <h4 className={styles.introText}>Hi, I&#39;m</h4>
            <h1>
              Ryan Zegray{' '}
              <span role="img" aria-label="Wave emoji">
                👋
              </span>
            </h1>
          </div>
          <div className={cn('col', styles.description)}>
            <p>
              I am a Software Engineer from Toronto, Canada. Currently I work at{' '}
              <a
                href="https://www.dooly.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dooly
              </a>{' '}
              as a full stack software engineer. Previously I worked at IBM
              working on{' '}
              <a
                href="https://cloud.ibm.com/catalog/services/voice-agent-with-watson#about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voice Agent with Watson
              </a>{' '}
              for IBM Cloud and developer experience for{' '}
              <a
                href="https://openliberty.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Liberty
              </a>
              .
            </p>
            <br />
            <p>
              I am passionate about web technologies, cloud and open source. I
              always love to meet new people so please feel free to get in
              touch.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </Container>
  );
}
