import React from "react"
import PropTypes from "prop-types"
import composeHooks from "compose-hooks-react"
import { graphql, useStaticQuery } from "gatsby"

function useSiteMetaData() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          links {
            name
            url
            icon
          }
        }
      }
    }
  `)
  return site
}

export const SiteMetaData = ({ children, siteMetadata }) => {
  return <>{children(siteMetadata)}</>
}

SiteMetaData.propTypes = {
  /** Site metadata */
  siteMetadata: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),

  /** Render function */
  children: PropTypes.func,
}

export default composeHooks(useSiteMetaData)(SiteMetaData)
