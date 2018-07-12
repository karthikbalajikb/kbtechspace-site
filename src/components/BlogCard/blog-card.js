import React from 'react'

import PostLink from "../PostLink/post-link"

const BlogCard = (props) => {
  const Posts = props.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default BlogCard
