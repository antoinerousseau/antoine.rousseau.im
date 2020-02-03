import React from 'react'
import PropTypes from 'prop-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Tag from './Tag'
import {FormattedDate} from 'react-intl'

const Talk = ({node: {date, title, url, description, tags}}) => (
  <li>
    <div className="date">
      <FormattedDate value={date} day="numeric" month="long" year="numeric" />
    </div>
    <div className="content">
      <div className="client">
        <a href={url}>{title}</a>
      </div>
      <div className="description">{documentToReactComponents(description.json)}</div>
      <div className="tags">{tags && tags.map((tag, index) => <Tag key={index} name={tag} />)}</div>
    </div>
  </li>
)

Talk.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Talk
