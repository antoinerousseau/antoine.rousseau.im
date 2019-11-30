/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

import Layout from './src/components/Layout'

const bugsnagClient = bugsnag(process.env.GATSBY_BUGSNAG)
bugsnagClient.use(bugsnagReact, React)

// wrap your entire app tree in the ErrorBoundary provided
const ErrorBoundary = bugsnagClient.getPlugin('react')

export const wrapRootElement = ({element}) => <ErrorBoundary>{element}</ErrorBoundary>

export const wrapPageElement = ({element}) => <Layout>{element}</Layout>
