/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const PRESETS = {
  art: {
    bg: "spectrum.green",
    color: "dark",
  },
  game: {
    bg: "spectrum.red",
    color: "dark",
  },
  blog: {
    bg: "spectrum.blue",
    color: "dark",
  },
  portfolio: {
    bg: "spectrum.purple",
    color: "dark",
  },
  simulation: {
    bg: "spectrum.yellow",
    color: "dark",
  },
  utility: {
    bg: "spectrum.orange",
    color: "dark",
  },
}

const Tag = ({ label = "tag", bg = "light", color = "dark" }) => {
  const colors = PRESETS[label] || { bg, color }
  return (
    <span sx={{ ...colors, borderRadius: 7, px: 3, py: 1, fontSize: 1 }}>
      {label}
    </span>
  )
}

export default Tag