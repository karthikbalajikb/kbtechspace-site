import React from "react";

import PageHeader from '../components/page-header/page-header'
import BlogCard from '../components/BlogCard/blog-card'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <section>
        <PageHeader title="blog" logo="fas fa-newspaper"  />
        <BlogCard edges={edges} />
      </section>
  )
};

export default Blog;

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
          }
        }
      }
    }
  }
`;