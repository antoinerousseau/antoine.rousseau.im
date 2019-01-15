import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {IntlProvider, FormattedMessage} from 'react-intl'
import {StaticQuery, graphql} from 'gatsby'

import {LOCALES} from '../config'
import LanguageIcon from '../icons/Language'

import './layout.css'

import {addLocaleData} from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_fr from 'react-intl/locale-data/fr'
addLocaleData(locale_en)
addLocaleData(locale_fr)

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    lang: 'en',
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const lang = (navigator.language || navigator.userLanguage).substr(0, 2)
      if (lang !== this.state.lang) {
        this.setState({
          lang,
        })
      }
    }
  }

  switchLang = (lang) => () => {
    this.setState({
      lang,
    })
  }

  render() {
    const {children} = this.props
    const {lang} = this.state

    return (
      <StaticQuery
        query={query}
        render={(data) => {
          const messages = {}
          data.allContentfulMessage.edges.forEach(({node}) => {
            if (node.node_locale === LOCALES[lang]) {
              messages[node.key] = node.message.message
            }
          })
          return (
            <IntlProvider locale={lang} messages={messages}>
              <>
                <header>
                  <button onClick={this.switchLang(lang === 'fr' ? 'en' : 'fr')}>
                    <LanguageIcon />
                    <FormattedMessage id="switch" />
                  </button>
                </header>
                {children}
              </>
            </IntlProvider>
          )
        }}
      />
    )
  }
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
