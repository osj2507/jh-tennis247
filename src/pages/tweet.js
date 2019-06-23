import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class TweetIndex extends React.Component {
  render() {
    const pageInformation = get(this, 'props.data.allContentfulPage.edges[0].node'),
          posts = get(this, 'props.data.allContentfulTwitterPost.edges');

    return (
      <Layout location={this.props.location} >
        <Helmet>
          <title>{pageInformation.metaTitle}</title>
          <meta name="description" content={pageInformation.metaDescription.childMarkdownRemark.rawMarkdownBody} />
          <meta property="og:title" content={pageInformation.metaTitle} />
          <meta property="og:image" content={`https:${pageInformation.heroImage.file.url}`} />
          <meta property="og:url" content="https://www.tennis247.net/tweet" />
          <meta property="og:description" content={pageInformation.metaDescription.childMarkdownRemark.rawMarkdownBody} />
          <meta property="og:site_name" content="tennis247.net" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@tennis247dk" />
          <meta name="twitter:title" content={pageInformation.metaTitle} />
          <meta name="twitter:description" content={pageInformation.metaDescription.childMarkdownRemark.rawMarkdownBody} />
          <meta name="twitter:creator" content="@tennis247dk" />
          <meta name="twitter:image" content={`https:${pageInformation.heroImage.file.url}`} />
          <meta name="twitter:domain" content="tennis247.net" />
        </Helmet>
        <Hero data={pageInformation} />
        <div className="wrapper">
          <ul className="article-list-sub">
            {posts.map(({ node }) => {
              return (
                <li key={node.id}>
                  <ArticlePreview data={node} type="tweet" />
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default TweetIndex

export const pageQuery = graphql`
  query TweetIndexQuery {
    allContentfulPage(filter:{slug:{eq:"tweet"}}) {
      edges {
        node {
          title
          heroImage {
            id
            file {
              url
              fileName
              contentType
            }
          }
          header
          metaTitle
          metaDescription {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
    allContentfulTwitterPost(sort: { fields: [publishDate], order: DESC }, limit: 48) {
      edges {
        node {
          id
          title
          url {
            childMarkdownRemark {
              html
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
