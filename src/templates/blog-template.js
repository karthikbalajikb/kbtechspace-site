import React from 'react'
import Helmet from 'react-helmet'
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
      url: `${frontmatter.banner}`,
      height: 630,
      width: 1200,
    },
    datePublished: `${frontmatter.date}`,
    dateModified: `${frontmatter.date}`,
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
  return (
    <div>
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
            content: `${frontmatter.banner}`,
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
          <p className="blog__post__date">{frontmatter.date}</p>
          <div className="blog__post__tags">
            {frontmatter.tags.map(d => (
              <p className="blog__post__tags__text">{d}</p>
            ))}
          </div>
          <div
            className="blog__post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        banner
      }
    }
  }
`
