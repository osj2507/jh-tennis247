import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import heroStyles from '../components/hero.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageInformation = get(this, 'props.data.allContentfulPage.edges')
    const postsFeatured = get(this, 'props.data.featuredBlogPosts.edges')
    const posts = get(this, 'props.data.nonfeaturedBlogPosts.edges')
    const postsTwitter = get(this, 'props.data.allContentfulTwitterPost.edges')
    const postsYoutube = get(this, 'props.data.allContentfulYoutubePost.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        {pageInformation.map(({ node }) => {
          return (
            <div className={heroStyles.hero}>
              <img className={heroStyles.heroImage} src={node.heroImage.file.url} />
              <div className={heroStyles.heroImageOverlayLeft} />
              <div className={heroStyles.heroImageOverlayRight} />
            </div>
          )
        })}
        <div className="wrapper">
          <h2 className="section-headline">Populære artikler</h2>
          <ul className="article-list">
            {postsFeatured.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Seneste artikler</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
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
    featuredBlogPosts: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featured
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
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
    nonfeaturedBlogPosts: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, skip: 3, limit: 8) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featured
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
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
    allContentfulYoutubePost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          url
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
    allContentfulTwitterPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          url
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
