import React, { useState, useEffect } from 'react'

import Layout from '../components'
import PageHeader from '../components/page-header/page-header'
import BlogCard from '../components/BlogCard/blog-card'
import Card from '../components/Card/Card'

import '../pageCSS/blog.scss'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
    headerImage: { sizes },
    kbImage,
  },
}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    // get data from medium api
    fetchMediumData()
  }, [])

  const fetchMediumData = async () => {
    const rawData = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@karthikbalaji99`
    )
    const { items } = await rawData.json();
    console.log('setBlogPosts >>>', items);
    setBlogPosts(items);
  }

  return (
    <Layout pathname={'/blog/'}>
      <section>
        <PageHeader title="blog" logo="fas fa-newspaper" />
        <section className="kbts-page-blog">
          {edges
            .filter(edge => !!edge.node.frontmatter.publishedDate) // You can filter your posts based on some criteria
            .map(edge => (
              <Card
                id={edge.node.id}
                origin="kb-techspace"
                authorImage={kbImage.sizes}
                authorName="Karthik Balaji"
                title={edge.node.frontmatter.title}
                thumbnail={edge.node.frontmatter.thumbnail}
                publishedDate={edge.node.frontmatter.publishedDate}
                updatedDate={edge.node.frontmatter.updatedDate}
                link={edge.node.frontmatter.path}
                tags={edge.node.frontmatter.tags}
                slug={edge.node.frontmatter.slug}
                readTime={edge.node.frontmatter.readTime}
              />
            ))}
            {blogPosts.map((blogPost, index) => (
              <Card
                // siteLogo={index === blogPosts.length - 1 ? sizes : null} // set site logo for last card only
                id={blogPost.guid}
                origin="medium"
                authorImage={kbImage.sizes}
                authorName="Karthik Balaji"
                title={blogPost.title}
                thumbnail={blogPost.thumbnail}
                publishedDate={blogPost.pubDate}
                updatedDate={blogPost.pubDate}
                link={blogPost.link}
                tags={blogPost.categories}
                slug=""
                readTime="3 min"
              />
            ))}
        </section>
      </section>
    </Layout>
  )
}

export default Blog

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___publishedDate] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            publishedDate(formatString: "MMMM DD, YYYY")
            updatedDate(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            thumbnail
            readTime
          }
        }
      }
    }

    headerImage: imageSharp(fluid: { originalName: { regex: "/logo/" } }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }

    kbImage: imageSharp(fluid: { originalName: { regex: "/kb-gixxer/" } }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
