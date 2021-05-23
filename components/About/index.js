import React from 'react';
import Container from '../Container';
import Social from '../Social';

export default function About() {
  return (
    <Container id="about">
      <div className="pt-10 md:pt-40 pb-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <h4 className="text-2xl">Hi, I&#39;m</h4>
            <h1>
              Ryan Zegray{' '}
              <span role="img" aria-label="Wave emoji">
                👋
              </span>
            </h1>
          </div>
          <div className="w-full pt-10">
            <p>
              I am a software engineer from Toronto, Canada. Currently I work at{' '}
              <a
                href="https://www.dooly.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dooly
              </a>{' '}
              as a full stack software engineer. Previously I worked at IBM
              Cloud working on Voice Agent with Watson (Now part of{' '}
              <a
                href="https://community.ibm.com/community/user/watsonapps/blogs/mitch-mason1/2021/02/08/announcing-voice-agent-with-watson-deprecation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watson Assistant
              </a>
              ) and developer experience for{' '}
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
