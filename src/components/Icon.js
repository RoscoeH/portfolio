/** @jsx jsx */
import { jsx } from "theme-ui"
import { InlineIcon } from "@iconify/react"
import External from "@iconify/icons-octicon/link-external"
import Eye from "@iconify/icons-octicon/eye"
import Github from "@iconify/icons-simple-icons/github"
import Storybook from "@iconify/icons-simple-icons/storybook"
import Figma from "@iconify/icons-simple-icons/figma"
import LinkedIn from "@iconify/icons-simple-icons/linkedin"
import Email from "@iconify/icons-octicon/mail"

const ICONS = {
  external: External,
  eye: Eye,
  github: Github,
  storybook: Storybook,
  figma: Figma,
  linkedin: LinkedIn,
  email: Email,
}

const Icon = ({ icon = "eye", size = 16 }) => {
  return (
    <InlineIcon icon={ICONS[icon] || ICONS.eye} width={size} height={size} />
  )
}

export default Icon
