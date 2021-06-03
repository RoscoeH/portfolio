import * as React from "react"
import PropTypes from "prop-types"
import composeHooks from "react-hooks-compose"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "theme-ui"

import Header from "./Header"
import SiteMetaData from "./SiteMetaData"

const components = {
  SiteMetaData,
  ...themeUiComponents,
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
        <main>
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
