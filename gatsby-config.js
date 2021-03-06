require("dotenv").config({
  path: `.env`,
})
process.env.NODE_ICU_DATA = "node_modules/full-icu"

module.exports = {
  siteMetadata: {
    title: `Antoine Rousseau`,
    description: `Freelance Web development and consulting`,
    keywords: `react, javascript, typescript, react native, gatsby, freelance, consulting, development, toulouse`,
    author: `@mOoot`,
    siteUrl: `https://antoine.rousseau.im`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:300,400,300i,400i"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
