/** @jsx jsx */
import { jsx, Box, Grid, Label, Input, Textarea, Button } from "theme-ui"
import { useForm, ValidationError } from "@formspree/react"

import Icon from "./Icon"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvjrpdj")

  if (state.succeeded) {
    return (
      <Box as="p" sx={{ bg: "muted" }}>
        Thanks for reaching out! I'll get back to you as soon as I can.
      </Box>
    )
  }

  return (
    <Box as="form" sx={{ maxWidth: 10, m: "0 auto" }} onSubmit={handleSubmit}>
      <Grid columns={[1, null, null, 2]} gap={[2, null, null, 3]}>
        <Box>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" mb="0" />
        </Box>
        <Box>
          <Label htmlFor="email">Email</Label>
          <Input id="_replyto" name="email" type="email" />
        </Box>
      </Grid>
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" name="message" rows={6} mb={3} />
      <Input type="text" name="_gotcha" sx={{ display: "none" }} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ width: ["100%", null, "50%", "25%"] }}
          disabled={state.submitting}
        >
          <Icon icon="email" />
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm
