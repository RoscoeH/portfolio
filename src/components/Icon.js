/** @jsx jsx */
import { jsx } from "theme-ui"
import { External, Eye } from "react-bytesize-icons"

const ICONS = {
  external: External,
  eye: Eye,
}

const Icon = ({ icon = "eye", size = 16 }) => {
  const IconComponent = ICONS[icon] || ICONS.eye
  return <IconComponent width={size} height={size} />
}

export default Icon
