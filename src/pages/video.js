import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageInformation = get(this, 'props.data.allContentfulPage.edges')
    const posts = get(this, 'props.data.allContentfulYoutubePost.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        {pageInformation.map(({ node }) => {
          return (
            <Hero data={node} />
          )
        })}
        <div className="wrapper">
          <h2 className="section-headline">Alle videoer</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
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

export default BlogIndex

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
        }
      }
    }
    allContentfulYoutubePost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          url
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
