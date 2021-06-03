import * as React from "react"
import PropTypes from "prop-types"
import composeHooks from "react-hooks-compose"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

export const Layout = ({ children, data }) => {
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} <a href="https://roscoe.dev">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: {
      siteMetadata: {
        title: PropTypes.string,
      },
    },
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
