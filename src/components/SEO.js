import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

const SEO = ({lang, title}) => (
  <StaticQuery
    query={query}
    render={(data) => {
      const {title: siteTitle, description, keywords} = data.site.siteMetadata
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title || siteTitle}
          titleTemplate={title && `%s | ${siteTitle}`}
          meta={[
            {
              name: `description`,
              content: description,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: description,
            },
            {
              name: `keywords`,
              content: keywords,
            },
          ]}
        />
      )
    }}
  />
)

SEO.defaultProps = {
  lang: `en`,
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
}

export default SEO

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`
