/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Themed } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div
      sx={{
        m: `0 auto`,
        maxWidth: 11,
        px: 3,
        py: 6,
        textAlign: "center",
      }}
    >
      <Themed.h1 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: "text",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Themed.h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
