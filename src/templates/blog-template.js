import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components'
import SubscribeCard from '../components/SubscribeCard'

import './blog-template.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const getJSONLD = () => ({
    '@context': 'http://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kbtechspace.com${frontmatter.path}`,
    },
    headline: `${frontmatter.title}`,
    image: {
      '@type': 'ImageObject',
      url: `${frontmatter.thumbnail}`,
      height: 630,
      width: 1200,
    },
    datePublished: `${frontmatter.publishedDate}`,
    dateModified: `${frontmatter.updatedDate}`,
    author: {
      '@type': 'Person',
      name: 'Karthik Balaji',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KB TechSpace',
      logo: {
        '@type': 'ImageObject',
        url:
          'https://user-images.githubusercontent.com/8594076/45932661-210beb00-bf9d-11e8-892c-192e9bba6750.jpg',
        width: 257,
        height: 60,
      },
    },
    description: `${frontmatter.title}`,
  })

  const disqusConfig = {
    shortname: 'kbtechspace-1',
    config: { identifier: frontmatter.slug, title: frontmatter.title },
  }
  return (
    <Layout pathname={'/blog/'}>
      <Helmet
        title={`${frontmatter.title} | Karthik Balaji`}
        meta={[
          { name: 'description', content: `${frontmatter.title}` },
          {
            name: 'keywords',
            content: `${frontmatter.tags.join()}`,
          },
          {
            name: 'theme-color',
            content: '#540a2f',
          },
          {
            property: 'og:site_name',
            content: 'Kb TechSpace',
          },
          {
            property: 'og:type',
            content: 'article',
          },
          {
            property: 'og:url',
            content: `https://kbtechspace.com${frontmatter.path}`,
          },
          {
            property: 'og:title',
            content: `${frontmatter.title}`,
          },
          {
            property: 'og:image',
            content: `${frontmatter.thumbnail}`,
          },
          {
            property: 'og:description',
            content: `${frontmatter.title}`,
          },
          {
            property: 'og:locale',
            content: `en_US`,
          },
        ]}
        script={[
          {
            type: 'application/ld+json',
            innerHTML: `${JSON.stringify(getJSONLD())}`,
          },
        ]}
      />
      <div className="blog__post__container">
        <div className="blog__post">
          <h1 className="blog__post__title">{frontmatter.title}</h1>
          <div className="blog__post__tags">
            {frontmatter.tags.map(d => (
              <p className="blog__post__tags__text">{d}</p>
            ))}
          </div>
          <PostContainer>
            <BlogInfoStrip>
              <StyledAvatar
                src="https://firebasestorage.googleapis.com/v0/b/kbtechspace-8907.appspot.com/o/karthikbalaji_transparent.png?alt=media&token=943905da-c4a3-4d27-a8d9-b51302b082e7"
                alt="kb"
              />
              <Name>Karthik Balaji</Name>
              <Metadata>
                {frontmatter.publishedDate} • {frontmatter.readTime} (
                {frontmatter.wordCount} words)
              </Metadata>
            </BlogInfoStrip>
            <PostContent dangerouslySetInnerHTML={{ __html: html }} />
          </PostContainer>
        </div>
      </div>
      <DiscussionWrapper>
        <DiscussionEmbed {...disqusConfig} />
        <SubscribeCard />
      </DiscussionWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        publishedDate(formatString: "MMM DD, YYYY")
        updatedDate(formatString: "MMM DD, YYYY")
        path
        title
        tags
        thumbnail
        slug
        readTime
        wordCount
      }
    }
  }
`
const PostContainer = styled.div`
  padding: 10px 15px 7px;
  margin-top: 15px;
  padding: 19px;
  border-radius: ${({ theme }) => `${theme.borderRadius.lg}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
  box-shadow: ${({ theme }) => `${theme.boxShadow.inner}`};
`

const PostContent = styled.div`
  margin-top: 20px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  padding: 20px;
  border-radius: ${({ theme }) => `${theme.borderRadius.none} ${theme.borderRadius.none} ${theme.borderRadius.md} ${theme.borderRadius.md}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
  color: ${({ theme }) => `${theme.secondary.main}`};

  p {
    font-size: medium;
    line-height: 1.7em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${({ theme }) => `${theme.secondary.main}`};
  }

  .language-text {
    padding: 0.2em 0.3em;
  }

  .language-javascript,
  .language-css {
    font-size: 16px;
  }

  blockquote {
    border-left: ${({ theme }) => ` 4px solid ${theme.primary.main}`};
    background: antiquewhite;
  }

  blockquote > p {
    padding-left: 20px;
  }

  img {
    width: 100% !important;
  }
`

const DiscussionWrapper = styled.div`
  padding: 10% 15%;

  @media (max-width: 760px) {
    padding: 10% 5%;
  }
`

const BlogInfoStrip = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(2, 1fr);
  height: 60px;
  grid-column-gap: 10px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  padding-left: 20px;
  border-radius: ${({ theme }) => `${theme.borderRadius.md} ${theme.borderRadius.md} ${theme.borderRadius.none} ${theme.borderRadius.none}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
`

const StyledAvatar = styled.img`
  grid-column: 1;
  grid-row: span 2;
  width: 60px;
  height: 60px;
  margin-bottom: 0px;
  justify-self: center;
  align-self: center;
`

const Name = styled.div`
  grid-column: 2;
  grid-row: 1;
  align-self: flex-end;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => `${theme.onSurface.main}`};
`

const Metadata = styled.div`
  grid-column: 2;
  grid-row: 2;
  font-size: 12px;
  color:  ${({ theme }) => `${theme.grayScale[600]}`};
`
