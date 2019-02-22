import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";

const NotFoundPage = props => (
  <Layout>
    <Helmet title="Page not found!" />
    <h1>
      Page not found{" "}
      <span role="img" aria-label="crying">
        😢
      </span>
    </h1>
    <p>You just hit a route that doesn't exist… the sadness.</p>
  </Layout>
);

export default NotFoundPage;
