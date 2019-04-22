let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

// check settings here https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
googleAnalyticsConfig = {
  trackingId: "UA-132769225-1",
  head: false,
  anonymize: true,
  respectDNT: true,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  siteMetadata: {
    siteUrl: `http://www.tennis247.net`,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: googleAnalyticsConfig
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                include: [
                  'Instagram',
                  'Twitter',
                  'YouTube'
                ],
                exclude: [
                  'CodePen',
                  'Flickr',
                  'Reddit',
                  'Twitch',
                  'Vimeo',
                  'SoundCloud'
                ]
              }
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          }
        ]
      }
    }
  ],
}
