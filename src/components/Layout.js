/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import composeHooks from "react-hooks-compose"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "theme-ui"

import Header from "./Header"
import SiteMetaData from "./SiteMetaData"
import SourceList from "./SourceList"

const components = {
  SiteMetaData,
  SourceList,
  Img,
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
    <>
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
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}{" "}
          <a href="https://roscoe.dev">roscoe.dev</a>
        </footer>
      </div>
    </>
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

export default composeHooks({ useLayoutQuery })(Layout)
