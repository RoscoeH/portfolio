/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { keyframes } from "@emotion/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { random, range } from "lodash"

const STEPS = 19
const FRAMES_1 = `
${range(STEPS)
  .map(
    i =>
      `${Math.round(i * (100 / STEPS))}% {
  clip-path: inset(${random(100)}px 0 ${random(100)}px 0);
}`
  )
  .join("\n")}
`
const FRAMES_2 = `
${range(STEPS)
  .map(
    i =>
      `${Math.round(i * (100 / STEPS))}% {
  clip-path: inset(${random(100)}px 0 ${random(100)}px 0);
}`
  )
  .join("\n")}
`
const noise1 = keyframes(FRAMES_1)
const noise2 = keyframes(FRAMES_2)

const Header = ({ siteTitle }) => (
  <header>
    <div
      sx={{
        m: `0 auto`,
        maxWidth: 11,
        px: 3,
        py: 5,
        textAlign: "center",
      }}
    >
      <Themed.h1
        sx={{
          m: 0,
        }}
      >
        <Link
          to="/"
          sx={{
            position: "relative",
            color: "text",
            textDecoration: `none`,

            "&:after": {
              content: `"${siteTitle}"`,
              position: "absolute",
              left: "2px",
              textShadow: ({ colors }) => `-1px 0 magenta`,
              color: "text",
              bg: "background",
              overflow: "hidden",
              clipPath: "inset(0 0 0 0)",
              animation: `${noise1} 2s infinite linear alternate-reverse`,
            },

            "&:before": {
              content: `"${siteTitle}"`,
              position: "absolute",
              left: "-2px",
              textShadow: ({ colors }) => `1px 0 cyan`,
              color: "text",
              bg: "background",
              overflow: "hidden",
              clipPath: "inset(0 0 0 0)",
              animation: `${noise2} 2s infinite linear alternate-reverse`,
            },
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
