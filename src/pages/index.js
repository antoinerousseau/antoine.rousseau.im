import React from "react"
import { Link, graphql } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { LOCALES } from "../config"
import SEO from "../components/SEO"
import DescriptionIcon from "../icons/Description"
import MaltIcon from "../icons/Malt"
import LinkedinIcon from "../icons/Linkedin"
import MailIcon from "../icons/Mail"

import "./index.css"

const HomePage = ({ data }) => {
  const { locale } = useIntl()

  const { welcome, linkedin, malt, email } = data.allContentfulHome.nodes.find(
    ({ node_locale }) => node_locale === LOCALES[locale]
  )

  return (
    <main id="home">
      <SEO lang={locale} />
      <FormattedMessage id="hi" tagName="h1" />
      <div id="welcome">{documentToReactComponents(welcome.json)}</div>
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

export default HomePage

export const query = graphql`
  {
    allContentfulHome {
      nodes {
        node_locale
        welcome {
          json
        }
        linkedin
        malt
        email
      }
    }
  }
`
