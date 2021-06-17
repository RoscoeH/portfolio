import React from "react"
import Gallery from "./Gallery"

export default {
  title: "Components/Gallery",
  component: Gallery,
}

const Template = args => <Gallery {...args} />

export const Default = Template.bind({})
Default.args = { siteTitle: "Site Title" }
