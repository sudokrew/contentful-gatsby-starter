import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/Layout";

import gatsbyIconImage from "../images/gatsby-icon.png";

const IndexPage = props => (
  <Layout>
    <Helmet title="Hello, Contentful Gatsby!">
      <meta property="og:title" content="Hello, Contentful Gatsby!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.location.href} />
      <meta property="og:image" content={gatsbyIconImage} />
    </Helmet>
    <h1>Hello, Contentful Gatsby!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      Visit <Link to="/blog">your blog</Link> after you've created{" "}
      <code>BlogPost</code> content with{" "}
      <a href="https://www.contentful.com/">Contentful</a>!
    </p>
  </Layout>
);

export default IndexPage;
