const path = require("path");
require("dotenv-safe").config();

module.exports = {
  pathPrefix: "/hello-contentful-gatsby",
  siteMetadata: {
    title: "Hello, Contentful Gatsby!",
    description: "An introduction to GatsbyJs and Contentful",
    author: "@thgaskell"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images")
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "hello-contentful-gatsby",
        short_name: "contentful-gatsby",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline"
  ]
};
