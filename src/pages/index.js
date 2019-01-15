import React from 'react'
import {Link, graphql} from 'gatsby'
import {FormattedMessage, injectIntl} from 'react-intl'

import {LOCALES} from '../config'
import SEO from '../components/SEO'
import DescriptionIcon from '../icons/Description'
import MaltIcon from '../icons/Malt'
import LinkedinIcon from '../icons/Linkedin'
import MailIcon from '../icons/Mail'

import './index.css'

const HomePage = ({data, intl: {locale}}) => {
  const {welcome, linkedin, malt, email} = data.allContentfulHome.edges.find(
    ({node}) => node.node_locale === LOCALES[locale]
  ).node

  return (
    <main id="home">
      <SEO lang={locale} />
      <FormattedMessage id="hi" tagName="h1" />
      <div
        id="welcome"
        dangerouslySetInnerHTML={{
          __html: welcome.childContentfulRichText.html,
        }}
      />
      <Link to="/cv" className="button">
        <DescriptionIcon />
        <FormattedMessage id="cv" />
      </Link>
      <a href={malt} className="button">
        <MaltIcon />
        <FormattedMessage id="malt" />
      </a>
      <a href={linkedin} className="button">
        <LinkedinIcon />
        <FormattedMessage id="linkedin" />
      </a>
      <a href={`mailto:${email}`} className="button">
        <MailIcon />
        <FormattedMessage id="mail" />
      </a>
    </main>
  )
}

export default injectIntl(HomePage)

export const query = graphql`
  {
    allContentfulHome {
      edges {
        node {
          node_locale
          welcome {
            childContentfulRichText {
              html
            }
          }
          linkedin
          malt
          email
        }
      }
    }
  }
`
