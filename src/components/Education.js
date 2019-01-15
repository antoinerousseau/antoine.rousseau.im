import React from 'react'
import PropTypes from 'prop-types'

const Education = ({node: {date, degree, url, school, location}}) => (
  <li>
    <div className="date">{date}</div>
    <div className="content">
      <div className="client">{degree}</div>
      {school && (
        <div className="description">
          <a href={url}>{school}</a> ({location})
        </div>
      )}
    </div>
  </li>
)

Education.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Education
