import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

const IndexPage = props => {
  const { data } = props;
  return (
    <Layout>
      <h1>Recent Posts</h1>
      <ul>
        {data.allContentfulBlogPost.edges.map(edge => {
          const post = edge.node;
          return (
            <li key={post.id}>
              <h2>
                <Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.body.childMarkdownRemark.excerpt}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
