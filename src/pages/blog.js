import React from 'react'

import Layout from '../components';
import PageHeader from '../components/page-header/page-header'
import BlogCard from '../components/BlogCard/blog-card'
import Card from '../components/Card/Card'

import '../pageCSS/blog.scss'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
    headerImage: { sizes },
  },
}) => {
  return (
    <Layout pathname={'/blog/'}>
    <section>
      <PageHeader title="blog" logo="fas fa-newspaper" />
      {/* <BlogCard edges={edges} /> */}
      <section className="kbts-page-blog">
        {edges
          .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
          .map(edge => <Card logo={sizes} key={edge.node.id} post={edge.node}  />   )}
      </section>
    </section>
    </Layout>
  )
}

export default Blog

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            banner
          }
        }
      }
    }

    headerImage: imageSharp(fluid: {originalName: {regex: "/logo/"}}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
