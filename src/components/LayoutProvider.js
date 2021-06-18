/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "theme-ui"

import SiteMetaData from "./SiteMetaData"
import SourceList from "./SourceList"
import ContactForm from "./ContactForm"
import Icon from "./Icon"

const components = {
  SiteMetaData,
  SourceList,
  Img,
  Icon,
  ContactForm,
  ...themeUiComponents,
  Link: ({ href, children, ...props }) => {
    // If external link, use Link from theme-ui
    if (href && href.match(/^(http|https):/g)) {
      return (
        <Link href={href} target="_blank" {...props}>
          {children}
        </Link>
      )
    }

    // Otherwise return GatsbyLink
    return (
      <Link as={GatsbyLink} to={href} {...props}>
        {children}
      </Link>
    )
  },
}

export const LayoutProvider = ({ children, data }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutProvider
