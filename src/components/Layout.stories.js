import React from "react"
import { Layout } from "./Layout"

export default {
  title: "Components/Layout",
  component: Layout,
}

const Template = args => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  data: {
    site: {
      siteMetadata: { title: "Site Title" },
    },
  },
}
