import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const EmployeeExperience = ({node: {date, position, companyName, companyUrl, location, description, tags}}) => (
  <li>
    <div className="date">{date}</div>
    <div className="content">
      <div className="client">
        {position} <FormattedMessage id="at" /> <a href={companyUrl}>{companyName}</a> ({location})
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

EmployeeExperience.propTypes = {
  node: PropTypes.object.isRequired,
}

export default EmployeeExperience
