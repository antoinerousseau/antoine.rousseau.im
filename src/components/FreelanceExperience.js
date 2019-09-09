import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const FreelanceExperience = ({node: {date, clientName, clientUrl, clientType, location, description, tags}}) => (
  <li>
    <div className="date">{date}</div>
    <div className="content">
      <div className="client">
        <a href={clientUrl}>{clientName}</a> ({clientType} <FormattedMessage id="in" /> {location})
      </div>
      <div className="description">{documentToReactComponents(description.json)}</div>
      <div className="tags">
        {tags &&
          tags.map((tag, index) => (
            <button key={index} className="tag">
              {tag}
            </button>
          ))}
      </div>
    </div>
  </li>
)

FreelanceExperience.propTypes = {
  node: PropTypes.object.isRequired,
}

export default FreelanceExperience
