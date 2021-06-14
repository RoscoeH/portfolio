const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { node } = require("prop-types")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx` && node.frontmatter.title) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `projects`,
    })

    createNodeField({
      node,
      name: "slug",
      value: `/projects${relativeFilePath}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { slug: { ne: "" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges
    .filter(({ node }) => node.frontmatter && node.frontmatter.title)
    .forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Project.js`),
        context: {
          id: node.id,
          slug: node.fields.slug,
        },
      })
    })
}
