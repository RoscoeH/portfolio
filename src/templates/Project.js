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
  const { theme } = useThemeUI()
  const { radii } = theme
  const { title, links, featuredImage, images } = frontmatter
  const linkCount = Object.values(links).reduce(
    (count, value) => (value ? count + 1 : count),
    0
  )
  const isLinkCountEven = linkCount % 2 === 0
  const linkColumns = [
    1,
    1,
    isLinkCountEven ? 2 : 1,
    isLinkCountEven ? 2 : linkCount,
    isLinkCountEven ? 4 : linkCount,
  ]
  const linkGridColumnStart = [
    1,
    1,
    1,
    1,
    isLinkCountEven && linkCount < 4 ? 2 : 1,
  ]
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
        <Themed.h1 sx={{ variant: "styles.h2", mt: 2 }}>{title}</Themed.h1>
      </Flex>
      {links && (
        <Grid
          columns={linkColumns}
          gap={2}
          sx={{
            "& > *:first-of-type": { gridColumnStart: linkGridColumnStart },
          }}
        >
          {links.site && (
            <Link variant="button" href={links.site}>
              <Icon icon="external" />
              Visit Site
            </Link>
          )}
          {links.source && (
            <Link variant="button" href={links.source}>
              <Icon icon="github" />
              Source
            </Link>
          )}
          {links.design && (
            <Link variant="button" href={links.design}>
              <Icon icon="figma" />
              Design
            </Link>
          )}
          {links.components && (
            <Link variant="button" href={links.components}>
              <Icon icon="storybook" />
              Components
            </Link>
          )}
        </Grid>
      )}
      {images && images.length > 0 && <Gallery images={images} />}
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
