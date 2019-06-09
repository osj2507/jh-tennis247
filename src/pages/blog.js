import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const pageInformation = get(this, 'props.data.allContentfulPage.edges[0].node'),
          posts = get(this, 'props.data.allContentfulBlogPost.edges');

    return (
      <Layout location={this.props.location} >
        <Helmet>
          <title>{pageInformation.metaTitle}</title>
          <meta name="description" content={pageInformation.metaDescription.childMarkdownRemark.rawMarkdownBody} />
          <meta property="og:title" content={pageInformation.metaTitle} />
          <meta property="og:image" content={pageInformation.heroImage.file.url} />
          <meta property="og:url" content="https://www.tennis247.net/blog" />
          <meta property="og:description" content={pageInformation.metaDescription.childMarkdownRemark.rawMarkdownBody} />
          <meta property="og:site_name" content="tennis247.net" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@tennis247dk" />
          <meta name="twitter:title" content={pageInformation.metaTitle} />
          <meta name="twitter:description" content={pageInformation.metaDescription.childMarkdownRemark.rawMarkdownBody} />
          <meta name="twitter:creator" content="@tennis247dk" />
          <meta name="twitter:image" content={pageInformation.heroImage.file.url} />
          <meta name="twitter:domain" content="tennis247.net" />
        </Helmet>
        <Hero data={pageInformation} />
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.id}>
                  <ArticlePreview data={node} type="post" />
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
  query BlogIndexQuery {
    allContentfulPage(filter:{slug:{eq:"blog"}}) {
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 48) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            id
            file {
              url
              fileName
              contentType
            }
          }
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
