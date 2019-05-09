import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class VideoIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title'),
          pageInformation = get(this, 'props.data.allContentfulPage.edges[0].node'),
          posts = get(this, 'props.data.allContentfulYoutubePost.edges');

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <Hero data={pageInformation} />
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.id}>
                  <ArticlePreview data={node} type="video" />
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default VideoIndex

export const pageQuery = graphql`
  query VideoIndexQuery {
    allContentfulPage(filter:{slug:{eq:"video"}}) {
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
        }
      }
    }
    allContentfulYoutubePost(sort: { fields: [publishDate], order: DESC }) {
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
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
