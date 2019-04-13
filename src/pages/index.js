import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageInformation = get(this, 'props.data.allContentfulPage.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const postsYoutube = get(this, 'props.data.allContentfulYoutubePost.edges')

    return (
      <Layout location={this.props.location} >
        {pageInformation.map(({ node }) => {
          return (
            <Helmet>
              <title>{siteTitle}</title>

              <meta name="description" content="" />

              <meta property="og:title" content={siteTitle} />
              <meta property="og:image" content={node.heroImage.file.url} />
              <meta property="og:url" content="/" />
              <meta property="og:description" content="" />
              <meta property="og:site_name" content="tennis247.dk" />

              <meta name="twitter:card" content="" />
              <meta name="twitter:site" content="@tennis247dk" />
              <meta name="twitter:title" content={siteTitle} />
              <meta name="twitter:description" content="" />
              <meta name="twitter:creator" content="@tennis247dk" />
              <meta name="twitter:image" content={node.heroImage.file.url} />
              <meta name="twitter:domain" content="tennis247.dk" />
            </Helmet>
          )
        })}
        {pageInformation.map(({ node }) => {
          return (
            <Hero data={node} />
          )
        })}
        <div className="wrapper">
          <h2 className="section-headline">Artikler</h2>
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
        <div className="wrapper">
          <h2 className="section-headline">Videoer</h2>
          <ul className="article-list">
            {postsYoutube.map(({ node }) => {
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPage(filter:{slug:{eq:"home"}}) {
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 6) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featured
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
    allContentfulYoutubePost(sort: { fields: [publishDate], order: DESC }, limit: 6) {
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
