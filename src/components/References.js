import React from "react"
import PropTypes from "prop-types"

const References = ({ nodes }) => {
  if (!nodes) {
    return null
  }
  return nodes.map(({ id, person, text, link }, index) => (
    <blockquote key={index}>
      <p>{text.text}</p>
      <cite>
        <a href={link}>{person}</a>
      </cite>
    </blockquote>
  ))
}

References.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object),
}

export default References
