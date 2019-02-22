import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

class BlogPost extends Component {
  render() {
    const { contentfulBlogPost, site } = this.props.data;

    return (
      <Layout>
        <Helmet
          title={`${contentfulBlogPost.title} | ${site.siteMetadata.title}`}
        />
        <Helmet />
        <h1>{contentfulBlogPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: contentfulBlogPost.body.childMarkdownRemark.html
          }}
        />
      </Layout>
    );
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
