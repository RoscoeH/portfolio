import { useStaticQuery, graphql } from "gatsby"

export const useAllMdx = (filter = "") => {
  const query = useStaticQuery(graphql`
    query allMdx {
      allMdx(
        filter: { frontmatter: { title: { ne: "" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              description
              tags
              links {
                components
                design
                site
              }
              featuredImage {
                childImageSharp {
                  fixed(quality: 90, width: 64) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return query.allMdx.edges.filter(edge =>
    edge.node.fields.slug.includes(filter)
  )
}
