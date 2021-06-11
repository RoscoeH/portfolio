import React from "react"
import WiggleGram from "./WiggleGram"

export default {
  title: "Components/WiggleGram",
  component: WiggleGram,
}

const Template = args => <WiggleGram {...args} />

export const Default = Template.bind({})
