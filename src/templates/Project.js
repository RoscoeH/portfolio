/** @jsx jsx */
import { jsx, Themed, useThemeUI, Grid, Flex, Link } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import Icon from "../components/Icon"

const ProjectTemplate = ({
  data: {
    mdx: { body, frontmatter },
  },
}) => {
  const { theme, breakpoints } = useThemeUI()
  const { radii } = theme
  console.log(breakpoints)
  const { title, links, featuredImage, images } = frontmatter
  console.log(images)
  return (
    <Layout>
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        {featuredImage && (
          <Img
            fixed={featuredImage.childImageSharp.fixed}
            alt={`${title} icon`}
            imgStyle={{ borderRadius: radii[4] }}
          />
        )}
        <Themed.h1 sx={{ variant: "styles.h2", mt: 2, mb: 0 }}>
          {title}
        </Themed.h1>
      </Flex>
      {images && <Gallery images={images} />}
      {links && (
        <Grid columns={[1, 1, 2, 2, 4]} gap={2} mb={4}>
          <Link variant="button" href={links.site}>
            <Icon icon="external" />
            Visit Site
          </Link>
          <Link variant="button" href={links.source}>
            <Icon icon="github" />
            Source
          </Link>
          <Link variant="button" href={links.source}>
            <Icon icon="figma" />
            Design
          </Link>
          <Link variant="button" href={links.source}>
            <Icon icon="storybook" />
            Components
          </Link>
        </Grid>
      )}
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
        subtitle
        links {
          site
          source
          design
          components
        }
        featuredImage {
          childImageSharp {
            fixed(quality: 90, width: 128) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        images {
          childImageSharp {
            fixed(height: 192) {
              ...GatsbyImageSharpFixed
              width
            }
          }
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`

export default ProjectTemplate
