import React from "react"
import PropTypes from "prop-types"
import { useAllMdx } from "../hooks/useAllMdx"

const SourceList = ({ children, filter }) => <>{children(useAllMdx(filter))}</>

SourceList.propTypes = {
  /** A string used as a filter for the query */
  filter: PropTypes.string,
  /** Render function */
  children: PropTypes.func,
}

export default SourceList
