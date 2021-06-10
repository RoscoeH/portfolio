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
