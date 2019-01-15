import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const FreelanceExperience = ({node: {date, clientName, clientUrl, clientType, location, description}}) => (
  <li>
    <div className="date">{date}</div>
    <div className="content">
      <div className="client">
        <a href={clientUrl}>{clientName}</a> ({clientType} <FormattedMessage id="in" /> {location})
      </div>
      <div className="description" dangerouslySetInnerHTML={{__html: description.childContentfulRichText.html}} />
    </div>
  </li>
)

FreelanceExperience.propTypes = {
  node: PropTypes.object.isRequired,
}

export default FreelanceExperience
