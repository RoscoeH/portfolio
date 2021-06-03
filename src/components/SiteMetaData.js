import React from "react"
import PropTypes from "prop-types"
import composeHooks from "react-hooks-compose"
import { graphql, useStaticQuery } from "gatsby"

const useSiteMetaData = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

export const SiteMetaData = ({ children, site }) => {
  const { siteMetadata } = site
  return <>{children(siteMetadata)}</>
}

SiteMetaData.propTypes = {
  children: PropTypes.func,
}

export default composeHooks({ useSiteMetaData })(SiteMetaData)
