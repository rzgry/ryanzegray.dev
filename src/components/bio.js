import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const BioWrapper = styled.div`
  @media (min-width: 500px) {
    display: flex;
  }
`;

const BioImgWrapper = styled.div`
  flex: 0;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const BioTextWrapper = styled.div`
  flex: 1;
`;

const Bio = () => {
  const data = useStaticQuery(
    graphql`
      query BioQuery {
        img: file(relativePath: { eq: "pic.jpg" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <BioWrapper>
      <BioImgWrapper>
        <Image
          fixed={data.img.childImageSharp.fixed}
          alt={data.site.siteMetadata.author}
          imgStyle={{
            borderRadius: '50%',
            border: '2px #f0f0f0 solid',
          }}
        />
      </BioImgWrapper>
      <BioTextWrapper>
        <p>
          Hi I&#39;m Ryan{' '}
          <span role="img" aria-label="Wave emoji">
            👋
          </span>
          . I am a Software Developer at IBM currently working on developer
          experience for{' '}
          <OutboundLink
            href="https://openliberty.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Liberty
          </OutboundLink>
          . Previously I worked on{' '}
          <OutboundLink
            href="https://cloud.ibm.com/catalog/services/voice-agent-with-watson#about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voice Agent with Watson
          </OutboundLink>{' '}
          for IBM Cloud. I graduated in April of 2019 with a degree in computer
          science from Western University.
        </p>
        <p>
          You can find my resume{' '}
          <OutboundLink
            // Netlify redirects send this to firebase cloud storage bucket
            // See netlify.toml
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </OutboundLink>{' '}
          and some of my past projects are available{' '}
          <OutboundLink
            href="https://github.com/rzgry"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </OutboundLink>
          .
        </p>
      </BioTextWrapper>
    </BioWrapper>
  );
};

export default Bio;
