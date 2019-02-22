const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplateFilePath = path.resolve(
    __dirname,
    "src",
    "templates",
    "blog-post.js"
  );

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);
  const { errors, data } = result;

  if (errors) {
    throw errors;
  }

  if (data) {
    await Promise.all(
      data.allContentfulBlogPost.edges.map(post => {
        let {
          node: { slug }
        } = post;
        return createPage({
          path: `/blog/posts/${slug}/`,
          component: blogPostTemplateFilePath,
          context: {
            slug
          }
        });
      })
    );
  }
};
