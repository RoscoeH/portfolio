import React from "react"
import { SiteMetaData } from "./SiteMetaData"

export default {
  title: "Components/SiteMetaData",
  component: SiteMetaData,
}

const Template = ({ children, ...args }) => (
  <SiteMetaData {...args}>{children}</SiteMetaData>
)

export const Default = Template.bind({})
Default.args = {
  children: ({ name, description }) => (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  ),
}
