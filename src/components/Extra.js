import React from 'react'
import PropTypes from 'prop-types'

const Extra = ({node: {label, content}}) => (
  <li>
    <div className="date">{label}</div>
    <div className="content">{content}</div>
  </li>
)

Extra.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Extra
