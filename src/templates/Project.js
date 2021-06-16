/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import Gallery from "../components/Gallery"

const ProjectTemplate = ({
  data: {
    mdx: { body, frontmatter },
  },
}) => {
  const { title, images } = frontmatter
  return (
    <Layout>
      <Themed.h2>{title}</Themed.h2>
      <Gallery images={images} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Project($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      slug
      frontmatter {
        title
        images {
          childImageSharp {
            fixed(height: 192, quality: 90) {
              ...GatsbyImageSharpFixed
              width
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

export default ProjectTemplate
