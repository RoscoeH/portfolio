/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Grid,
  Label,
  Input,
  Textarea,
  Button,
  Themed,
  useThemeUI,
} from "theme-ui"
import { useForm, ValidationError } from "@formspree/react"
import useDimensions from "react-use-dimensions"

import Icon from "./Icon"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvjrpdj")
  const [dimensionsRef, { width, height }] = useDimensions()
  const { theme } = useThemeUI()
  const { sizes } = theme

  return (
    <Box
      ref={dimensionsRef}
      as="form"
      sx={{ maxWidth: 10, m: "0 auto" }}
      onSubmit={handleSubmit}
    >
      {state.succeeded ? (
        <Flex
          as="p"
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bg: "muted",
            p: 3,
            borderRadius: 4,
            width,
            height,
          }}
        >
          <Icon icon="heart" size={sizes[5]} />
          <Themed.p>
            Thanks for reaching out! I'll get back to you as soon as I can.
          </Themed.p>
        </Flex>
      ) : (
        <Box>
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
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
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
      )}
    </Box>
  )
}

export default ContactForm
