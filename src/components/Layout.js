/** @jsx jsx */
import { jsx, Link, Themed } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import composeHooks from "compose-hooks-react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "theme-ui"

import Header from "./Header"
import SiteMetaData from "./SiteMetaData"
import SourceList from "./SourceList"
import Icon from "./Icon"

const components = {
  SiteMetaData,
  SourceList,
  Img,
  Icon,
  ...themeUiComponents,
  Link: ({ href, children, ...props }) => {
    // If external link, use Link from theme-ui
    if (href && href.match(/^(http|https):/g)) {
      return (
        <Link href={href} target="_blank" {...props}>
          {children}
        </Link>
      )
    }

    // Otherwise return GatsbyLink
    return (
      <Link as={GatsbyLink} to={href} {...props}>
        {children}
      </Link>
    )
  },
}

export const Layout = ({ children, data }) => {
  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main sx={{ px: [3, null, null, 0] }}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </main>
        <footer sx={{ fontSize: 0, pt: 3, textAlign: "center" }}>
          <Themed.p>
            Want to hire me? <Link href="#contact">Let's get in touch</Link>
          </Themed.p>
          <Themed.p>
            Want to support me?{" "}
            <Link href="https://www.buymeacoffee.com/roscoe.dev">
              Buy me a coffee ☕
            </Link>
          </Themed.p>
          <Themed.p>© {new Date().getFullYear()} roscoe.dev</Themed.p>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
}

function useLayoutQuery() {
  return {
    data: useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `),
  }
}

export default composeHooks(useLayoutQuery)(Layout)
