/** @jsx jsx */
import { jsx } from "theme-ui"

const PRESETS = {
  art: {
    color: "spectrum.green",
    bg: "dark",
  },
  game: {
    color: "spectrum.red",
    bg: "dark",
  },
  blog: {
    color: "spectrum.blue",
    bg: "dark",
  },
  portfolio: {
    color: "spectrum.purple",
    bg: "dark",
  },
  simulation: {
    color: "spectrum.yellow",
    bg: "dark",
  },
  utility: {
    color: "spectrum.orange",
    bg: "dark",
  },
}

const Tag = ({ label = "tag", bg = "light", color = "dark" }) => {
  const colors = PRESETS[label] || { bg, color }
  return (
    <span
      sx={{
        ...colors,
        borderRadius: 7,
        px: 2,
        py: "2px",
        fontSize: 1,
        // opacity: 0.8,
      }}
    >
      {label}
    </span>
  )
}

export default Tag
