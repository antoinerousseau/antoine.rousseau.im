import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const EmployeeExperience = ({node: {date, position, companyName, companyUrl, location, description}}) => (
  <li>
    <div className="date">{date}</div>
    <div className="content">
      <div className="client">
        {position} <FormattedMessage id="at" /> <a href={companyUrl}>{companyName}</a> ({location})
      </div>
      <div className="description" dangerouslySetInnerHTML={{__html: description.childContentfulRichText.html}} />
    </div>
  </li>
)

EmployeeExperience.propTypes = {
  node: PropTypes.object.isRequired,
}

export default EmployeeExperience
