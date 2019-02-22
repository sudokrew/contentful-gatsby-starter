action "Publish GitHub Pages" {
  uses = "enriikke/gatsby-gh-pages-action@master"
  secrets = ["ACCESS_TOKEN"]
  args = "--prefix-paths"
}
