import React from "react"
import ContactForm from "./ContactForm"

export default {
  title: "Components/ContactForm",
  component: ContactForm,
}

const Template = args => <ContactForm {...args} />

export const Default = Template.bind({})
Default.args = {}
