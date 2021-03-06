import React from "react"
import Icon from "./Icon"

export default {
  title: "Components/Icon",
  component: Icon,
}

const Template = args => <Icon {...args} />

export const External = Template.bind({})
External.args = { icon: "external" }

export const Eye = Template.bind({})
Eye.args = { icon: "eye" }

export const Github = Template.bind({})
Github.args = { icon: "github" }

export const Storybook = Template.bind({})
Storybook.args = { icon: "storybook" }

export const Figma = Template.bind({})
Figma.args = { icon: "figma" }

export const LinkedIn = Template.bind({})
LinkedIn.args = { icon: "linkedin" }

export const Email = Template.bind({})
Email.args = { icon: "email" }

export const Heart = Template.bind({})
Heart.args = { icon: "heart" }
