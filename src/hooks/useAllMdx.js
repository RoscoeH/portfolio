import { useStaticQuery, graphql } from "gatsby"

export const useAllMdx = filter => {
  const query = useStaticQuery(graphql`
    query allMdx {
      allMdx(filter: { slug: { ne: "" } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              description
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

  return query.allMdx.edges
}
