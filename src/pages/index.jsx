import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Layout, Listing, Wrapper, Title, NavBar } from '../components';
import website from '../../config/website';

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 2rem;
  text-align: center;
  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.greyDark};
  }
  h3 {
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    font-weight: 400;
    margin: 0 0 2rem;
    color: ${props => props.theme.colors.grey};
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 2rem;
    a {
      margin-bottom: 1rem;
    }
  }
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
  a {
    display: inline-block;
    border: 2px solid ${props => props.theme.colors.primary};
    font-size: 0.8rem;
    font-family: Arial, sans-serif;
    font-style: initial;
    text-transform: uppercase;
    margin: 0 1.5rem;
    padding: 0.5rem 1.7rem;
    background-color: #ffffff;
    text-decoration: none;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.2);
    :hover {
      background-color: ${props => props.theme.colors.primary};
      color: #ffffff;
    }
  }
`;

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    &:not([data-name='social-entry-0']) {
      margin-left: 2.5rem;
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${props => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`;

const ProjectListing = styled.ul`
  list-style-type: none;
  margin-left: 0;
  margin-top: 4rem;
  li {
    margin-bottom: 1.45rem;
    a {
      font-size: 2.369rem;
      font-style: normal;
      color: ${props => props.theme.colors.black};
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.777rem;
      }
    }
  }
`;

const IndexWrapper = Wrapper.withComponent('main');

class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props;
    const heroImage = homepage.data.hero_image;
    let heroImageSrc = null;

    if (heroImage) {
      heroImageSrc = heroImage.localFile.childImageSharp.fluid.src;
    }

    return (
      <Layout>
        <Hero style={{ backgroundImage: `url(${heroImageSrc})` }}>
          <HeroInner>
            <h1>{homepage.data.title.text}</h1>
            <h3>Front-End / JavaScript Developer</h3>
            <HeroText dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
            <Social style={{ display: 'none' }}>
              {social.nodes.map((s, index) => (
                <li data-name={`social-entry-${index}`} key={s.primary.label.text}>
                  <a href={s.primary.link.url}>{s.primary.label.text}</a>
                </li>
              ))}
            </Social>
          </HeroInner>
        </Hero>
        <NavBar />
        <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>Najnowsze artykuły</Title>
          <Listing posts={posts.nodes} />
          <Title style={{ marginTop: '8rem' }}>Projekty</Title>
          <ProjectListing>
            {projects.nodes.map(project => (
              <li key={project.primary.label.text}>
                <a href={project.primary.link.url}>{project.primary.label.text}</a>
              </li>
            ))}
          </ProjectListing>
        </IndexWrapper>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        hero_image: PropTypes.shape({
          localFile: PropTypes.object,
        }),
      }),
    }),
    social: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjectsBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
  }
`;
