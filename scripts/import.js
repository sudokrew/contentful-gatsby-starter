const contentfulImport = require("contentful-import");
const path = require("path");

contentfulImport({
  contentFile: path.join(__dirname, "..", ".contentful", "export.json"),
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
});
