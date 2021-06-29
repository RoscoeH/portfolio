import React from "react"
import Tag from "./Tag"

export default {
  title: "Components/Tag",
  component: Tag,
}

const Template = args => <Tag {...args} />

export const Default = Template.bind({})
Default.args = { label: "hello", bg: "white", color: "black" }

export const Art = Template.bind({})
Art.args = { label: "art" }

export const Game = Template.bind({})
Game.args = { label: "game" }

export const Blog = Template.bind({})
Blog.args = { label: "blog" }

export const Portfolio = Template.bind({})
Portfolio.args = { label: "portfolio" }

export const Simulation = Template.bind({})
Simulation.args = { label: "simulation" }

export const Utility = Template.bind({})
Utility.args = { label: "utility" }
