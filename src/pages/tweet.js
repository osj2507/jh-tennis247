import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class TweetIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title'),
          pageInformation = get(this, 'props.data.allContentfulPage.edges[0].node'),
          posts = get(this, 'props.data.allContentfulTwitterPost.edges');

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <Hero data={pageInformation} />
        <div className="wrapper">
          <h2 className="section-headline">Alle tweets</h2>
          <ul className="article-list">
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
        }
      }
    }
    allContentfulTwitterPost(sort: { fields: [publishDate], order: DESC }) {
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
