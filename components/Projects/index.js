import React from 'react';
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

function Project({ img, title, body, links, tags, flipped }) {
  return (
    <div
      className={cn(
        'flex flex-col',
        flipped ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <div className="w-full">
        <div className="shadow-lg md:mr-8 mb-6 md:mb-0">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            layout="responsive"
            alt={img.alt}
          />
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0">
        <div className="md:mr-8">
          <h6 className="font-semibold mb-4">{title}</h6>
          <p className="text-sm leading-6">{body}</p>
          <ul className="flex mt-4">
            {links?.map((link) => (
              <li className="mr-3" key={link.name}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Container id="projects" className="pt-20 pb-12">
      <h2>Projects</h2>
      <p className="mt-4 mb-8">Projects & Open Source Contributions</p>
      <Project
        img={{
          src: '/images/tools-for-microprofile.png',
          width: 1200,
          height: 640,
          alt: 'Tools for MicroProfile on VS Marketplace',
        }}
        title="Eclipse LSP4MP + Tools for MicroProfile"
        body={
          <>
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
          </>
        }
        links={[
          {
            name: 'GitHub',
            href: 'https://github.com/redhat-developer/vscode-microprofile',
          },
          {
            name: 'VSMarketplace',
            href: 'https://marketplace.visualstudio.com/items?itemName=redhat.vscode-microprofile',
          },
        ]}
        tags={[tags.ts, tags.node, tags.mp, tags.vscode, tags.java]}
      />
      <Divider />
      <Project
        img={{
          src: '/images/microprofile-starter.png',
          width: 1200,
          height: 642,
          alt: 'MicroProfile Starter on VS Marketplace',
        }}
        title="MicroProfile Starter VSCode Extension"
        body={
          <>
            The MicroProfile Starter extension provides support for generating a
            MicroProfile Java project with examples based on the{' '}
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
          </>
        }
        links={[
          {
            name: 'GitHub',
            href: 'https://github.com/MicroShed/mp-starter-vscode-ext',
          },
          {
            name: 'VSMarketplace',
            href: 'https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.mp-starter-vscode-ext',
          },
        ]}
        tags={[tags.ts, tags.node, tags.mp, tags.vscode]}
        flipped
      />
      <Divider />
      <Project
        img={{
          src: '/images/voiceagent.png',
          width: 1200,
          height: 624,
          alt: 'Voice Agent with Watson',
        }}
        title="Voice Agent with Watson Dashboard"
        body={
          <>
            Voice Agent with Watson (Now deprecated and built into{' '}
            <a
              href="https://community.ibm.com/community/user/watsonapps/blogs/mitch-mason1/2021/02/08/announcing-voice-agent-with-watson-deprecation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watson Assistant
            </a>
            ) enhances your call center operations by orchestrating Watson
            services and integrating them with the telephone network. Your voice
            agent can listen and respond to customers using natural language.
          </>
        }
        links={[
          {
            name: 'IBM Cloud',
            href: 'https://cloud.ibm.com/docs/voice-agent',
          },
        ]}
        tags={[tags.js, tags.react, tags.node, tags.html, tags.css]}
      />
      <Divider />
      <Project
        img={{
          src: '/images/openlibertydev.png',
          width: 1200,
          height: 677,
          alt: 'Open Liberty dev Mode',
        }}
        title="Open Liberty dev mode"
        body={
          <>
            Open Liberty development mode allows you to develop applications
            with any text editor or IDE by providing hot reload and deployment,
            on demand testing, and debugger support. Your code is automatically
            compiled and deployed to your running server, making it easy to
            iterate on your changes.
          </>
        }
        links={[
          {
            name: 'GitHub',
            href: 'https://github.com/openliberty/ci.gradle',
          },
          {
            name: 'Blog Post',
            href: 'https://openliberty.io/blog/2020/03/11/gradle-dev-mode-open-liberty.html',
          },
        ]}
        tags={[tags.java, tags.gradle, tags.mp]}
        flipped
      />
    </Container>
  );
}
