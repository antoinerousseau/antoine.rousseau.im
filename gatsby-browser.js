/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import Bugsnag from "@bugsnag/js"
import BugsnagReact from "@bugsnag/plugin-react"

import Layout from "./src/components/Layout"

Bugsnag.start({
  apiKey: process.env.GATSBY_BUGSNAG,
  releaseStage: process.env.NODE_ENV,
  enabledReleaseStages: ["production"],
  plugins: [new BugsnagReact(React)],
})

// wrap your entire app tree in the ErrorBoundary provided
const ErrorBoundary = Bugsnag.getPlugin("react")

export const wrapRootElement = ({ element }) => <ErrorBoundary>{element}</ErrorBoundary>

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
