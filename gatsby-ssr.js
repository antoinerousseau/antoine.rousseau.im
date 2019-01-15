/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import Layout from './src/components/Layout'

export const wrapPageElement = ({element}) => <Layout>{element}</Layout>

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <link key="fonts" href="https://fonts.googleapis.com/css?family=Lato:300,400,300i,400i" rel="stylesheet" />,
  ])
}
