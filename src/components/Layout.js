import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {IntlProvider, FormattedMessage} from 'react-intl'
import {useStaticQuery, graphql} from 'gatsby'

import {LOCALES} from '../config'
import LanguageIcon from '../icons/Language'

import './layout.css'

const Layout = ({children}) => {
  const [lang, setLang] = useState('fr')

  useEffect(() => {
    setLang((navigator.language || navigator.userLanguage).substr(0, 2))
  }, [])

  const data = useStaticQuery(query)
  const messages = {}
  data.allContentfulMessage.edges.forEach(({node}) => {
    if (node.node_locale === LOCALES[lang]) {
      messages[node.key] = node.message.message
    }
  })

  const switchLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr')
  }

  return (
    <IntlProvider locale={lang} messages={messages}>
      <>
        <header>
          <button onClick={switchLang} className="button">
            <LanguageIcon />
            <FormattedMessage id="switch" />
          </button>
        </header>
        {children}
      </>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const query = graphql`
  {
    allContentfulMessage {
      edges {
        node {
          node_locale
          key
          message {
            message
          }
        }
      }
    }
  }
`
