/** @jsx jsx */
import { jsx } from "theme-ui"
import { random, range } from "lodash"
import { motion } from "framer-motion"

import theme from "../gatsby-plugin-theme-ui"

const MAX_SIZE = 8
const MAX_DEPTH = 10
const DEPTH_SCALING_FACTOR = 1.2
const NUM_DOTS = 192
const WIDTH = 512
const HEIGHT = 256
const BASE_DISPLACEMENT = 1
const COLORS = Object.values(theme.colors.spectrum)
const DURATION = 0.25
const POSITION_BUFFER = MAX_SIZE * 2

const SHAPE_COMPONENTS = {
  circle: ({ x, y, size, displacement, color }) => (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      sx={{ fill: color }}
      initial={{ x: 0 }}
      animate={{
        x: [displacement, -displacement, displacement],
        transition: {
          repeat: Infinity,
          duration: DURATION,
        },
      }}
    />
  ),
  square: ({ x, y, size, displacement, color }) => (
    <motion.rect
      x={x}
      y={y}
      width={size * 1.5}
      height={size * 1.5}
      sx={{ fill: color }}
      initial={{ x: 0, rotate: random(359) }}
      animate={{
        x: [displacement, -displacement, displacement],
        transition: {
          repeat: Infinity,
          duration: DURATION,
        },
      }}
    />
  ),
  text: ({ x, y, displacement, color, children }) => (
    <motion.text
      x={x}
      y={y}
      sx={{ fill: color, fontFamily: "heading", fontSize: 8 }}
      initial={{ x: 0 }}
      animate={{
        x: [displacement, -displacement, displacement],
        transition: {
          repeat: Infinity,
          duration: DURATION,
        },
      }}
    >
      {children}
    </motion.text>
  ),
}

function sortShapes(a, b) {
  if (a.displacement < b.displacement) return -1
  if (a.displacement > b.displacement) return 1
  return 0
}

const SHAPES = ["circle"]

const WiggleGram = ({
  width = WIDTH,
  height = HEIGHT,
  shapeCount = NUM_DOTS,
}) => {
  const shapes = range(shapeCount).map(() => ({
    Shape: SHAPE_COMPONENTS[SHAPES[random(SHAPES.length - 1)]],
    x: random(POSITION_BUFFER, width - POSITION_BUFFER),
    y: random(POSITION_BUFFER, height - POSITION_BUFFER),
    size: random(1, MAX_SIZE),
    color: COLORS[random(COLORS.length - 1)],
    displacement:
      (Math.pow(random(1, MAX_DEPTH), DEPTH_SCALING_FACTOR) *
        BASE_DISPLACEMENT) /
      2,
  }))

  shapes.push({
    Shape: SHAPE_COMPONENTS.text,
    x: width / 2 - 150,
    y: height / 2,
    size: 48,
    color: "light",
    displacement:
      (Math.pow(MAX_DEPTH / 2, DEPTH_SCALING_FACTOR) * BASE_DISPLACEMENT) / 2,
    children: "roscoe",
  })

  shapes.sort(sortShapes)

  console.log(shapes)

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`}>
      {shapes.map(({ Shape, x, y, size, color, displacement, children }, i) => (
        <Shape
          key={i}
          x={x}
          y={y}
          size={size}
          color={color}
          displacement={displacement}
        >
          {children}
        </Shape>
      ))}
    </svg>
  )
}

export default WiggleGram
