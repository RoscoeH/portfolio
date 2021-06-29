/** @jsx jsx */
import { jsx, Link, Themed, useThemeUI } from "theme-ui"
import PropTypes from "prop-types"
import { Global } from "@emotion/react"
import composeHooks from "compose-hooks-react"
import { useStaticQuery, graphql } from "gatsby"

import LayoutProvider from "./LayoutProvider"
import Header from "./Header"
import Seo from "./Seo"

export const Layout = ({ children, data, path }) => {
  const { theme } = useThemeUI()
  const { colors } = theme
  return (
    <div
      sx={{
        m: `0 auto`,
        maxWidth: 11,
      }}
    >
      <Global
        styles={{
          "::selection": {
            color: colors.background,
            background: colors.spectrum.purple,
          },
        }}
      />
      <Seo title={/projects/.test(path) ? "Projects" : null} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main sx={{ px: [3, 3, 3, null, null, null, 0] }}>
        <LayoutProvider>{children}</LayoutProvider>
      </main>
      <footer sx={{ fontSize: 0, pt: 3, textAlign: "center" }}>
        <Themed.p>
          Want to hire me? <Link href="#contact">Let's get in touch</Link>
        </Themed.p>
        <Themed.p>
          Want to support me?{" "}
          <Link href="https://www.buymeacoffee.com/roscoe.dev">
            Buy me a coffee{" "}
            <span role="img" aria-label="coffee">
              ☕
            </span>
          </Link>
        </Themed.p>
        <Themed.p>© {new Date().getFullYear()} roscoe.dev</Themed.p>
      </footer>
    </div>
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
