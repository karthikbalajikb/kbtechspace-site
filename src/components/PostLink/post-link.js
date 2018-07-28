import React from "react";
import Link from "gatsby-link";

import './post-link.scss'

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} className="kbts-post-link">
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
);

export default PostLink;