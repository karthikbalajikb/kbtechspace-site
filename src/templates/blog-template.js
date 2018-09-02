import React from "react";
import Helmet from 'react-helmet';
import './blog-template.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
       <Helmet
        title={`${frontmatter.title} | Karthik Balaji`}
        meta={[
          { name: 'description', content: 'Blog' },
          {
            name: 'keywords',
            content: 'Blog, Javascript, ES6, Learn, Guide, Personal,',
          },
          {
            name: 'theme-color',
            content: '#540a2f'
          }
        ]}
      />
    <div className="blog__post__container">
      <div className="blog__post">
        <h1 className="blog__post__title">{frontmatter.title}</h1>
        <p className="blog__post__date">{frontmatter.date}</p>
        <div
          className="blog__post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;