import React from 'react'
import {Link, graphql} from 'gatsby'
import {FormattedMessage, injectIntl} from 'react-intl'

import {LOCALES, BIRTHDATE} from '../config'
import SEO from '../components/SEO'
import FreelanceExperience from '../components/FreelanceExperience'
import EmployeeExperience from '../components/EmployeeExperience'
import Education from '../components/Education'
import Extra from '../components/Extra'

import './cv.css'

const getAge = () => {
  const now = new Date()
  let age = now.getFullYear() - BIRTHDATE.getFullYear()
  const monthsDiff = now.getMonth() - BIRTHDATE.getMonth()
  if (monthsDiff < 0 || (monthsDiff === 0 && now.getDate() < BIRTHDATE.getDate())) {
    age--
  }
  return age
}

const getList = ({edges}, Comp, locale, type) => (
  <ul>
    {edges
      .filter(({node}) => node.node_locale === LOCALES[locale] && (!type || type === node.type))
      .map(({node}, index) => (
        <Comp key={index} node={node} />
      ))}
  </ul>
)

const CvPage = ({data, intl: {locale}}) => (
  <main id="cv">
    <SEO title="CV" lang={locale} />
    <h1>
      <Link to="/">Antoine Rousseau</Link>
    </h1>
    <FormattedMessage id="age" values={{age: getAge()}} tagName="p" />
    <FormattedMessage id="freelanceExperience" tagName="h2" />
    {getList(data.allContentfulFreelanceExperience, FreelanceExperience, locale)}
    <FormattedMessage id="employeeExperience" tagName="h2" />
    {getList(data.allContentfulEmployeeExperience, EmployeeExperience, locale)}
    <FormattedMessage id="education" tagName="h2" />
    {getList(data.allContentfulEducation, Education, locale)}
    <FormattedMessage id="skills" tagName="h2" />
    {getList(data.allContentfulExtra, Extra, locale, 'skill')}
    <FormattedMessage id="languages" tagName="h2" />
    {getList(data.allContentfulExtra, Extra, locale, 'lang')}
    <FormattedMessage id="extra" tagName="h2" />
    {getList(data.allContentfulExtra, Extra, locale, 'extra')}
  </main>
)

export default injectIntl(CvPage)

export const query = graphql`
  {
    allContentfulFreelanceExperience(sort: {fields: [end], order: DESC}) {
      edges {
        node {
          node_locale
          date
          clientName
          clientUrl
          clientType
          location
          description {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
    allContentfulEmployeeExperience(sort: {fields: [end], order: DESC}) {
      edges {
        node {
          node_locale
          date
          position
          companyName
          companyUrl
          location
          description {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
    allContentfulEducation(sort: {fields: [end], order: DESC}) {
      edges {
        node {
          node_locale
          date
          degree
          school
          url
          location
        }
      }
    }
    allContentfulExtra(sort: {fields: [position], order: ASC}) {
      edges {
        node {
          node_locale
          type
          label
          content
        }
      }
    }
  }
`
