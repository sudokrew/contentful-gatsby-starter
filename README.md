## 🚀 Quick start

1.  **Use this template to create a Gatsby site!**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    npx gatsby new hello-contentful-gatsby https://github.com/sudokrew/contentful-gatsby-starter
    ```

2.  **Add your Contentful API tokens.**
    Navigate into your new site’s directory and create your own `.env` from the the provided `.env.example file.

    ```sh
    cd my-default-starter/
    cp .env.example .env
    ```

    You will need to access your API keys through your Contentful space's dashboard. (`Settings > Space Settings: API keys`).

    If this is a newly created space, under `Content delivery / preview tokens` you should have an `Example Key 1` created for you. You will need to copy the `Space ID` and `Content Delivery API` access token into your `.env` file.

    If you have not created a content management token, you'll need to do that now.

    Navigate back to your API keys and select the `Content management tokens` tab.

    Click the `Generate personal token` and follow the instructions.

    > **Important:** Copy your key after it is created! You will not be able to view it later!

    Update your `.env` file with the content management token.

    Your `.env` file should now look like this:

    ```
    # Note these values shouldn't be committed to your repository!
    # CONTENTFUL_MANAGEMENT_TOKEN is secret!

    CONTENTFUL_SPACE_ID=r726yf0iwpo0
    CONTENTFUL_DELIVERY_TOKEN=f6ad7fe40514c9f8b469be12c6e25227649f07438611ac73dad5c2260dccbcdd
    CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-ee5db341f2eefda6a0933b0b948ed5b51f99810c3767c6fa652e210f5189d0d0
    ```

3.  **Start developing.**

    This repository includes already includes a `BlogPost` content model for you to help get you started!

    ```sh
    npm run contentful:import
    ```

    You should be able to see a new content type and some blog posts have been uploaded to your Contentful space!

    Now let's have Gatsby generate our site.

    ```sh
    npm run gatsby:develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `hello-contentful-gatsby` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

11. **`README.md`**: A text file containing useful reference information about your project.
