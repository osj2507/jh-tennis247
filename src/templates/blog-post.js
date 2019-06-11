import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ReactShare from 'react-share-simplified';

import Layout from '../components/layout'
import heroStyles from '../components/hero.module.css'
import styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const pageInformation = get(this, 'props.data.allContentfulPage.edges[0].node'),
          post = get(this.props, 'data.contentfulBlogPost');

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet>
            <title>{`${pageInformation.metaTitle} - ${post.title}`}</title>
            <meta name="description" content={post.description.childMarkdownRemark.rawMarkdownBody} />
            <meta property="og:title" content={`${pageInformation.metaTitle} - ${post.title}`} />
            <meta property="og:type" content="article" />
            <meta property="og:image" content={`https:${post.heroImage.file.url}`} />
            <meta property="og:url" content={`https://www.tennis247.net//blog/${post.slug}`} />
            <meta property="og:description" content={post.description.childMarkdownRemark.rawMarkdownBody} />
            <meta property="og:site_name" content="tennis247.net" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@tennis247dk" />
            <meta name="twitter:title" content={`${pageInformation.metaTitle} - ${post.title}`} />
            <meta name="twitter:description" content={post.description.childMarkdownRemark.rawMarkdownBody} />
            <meta name="twitter:creator" content="@tennis247dk" />
            <meta name="twitter:image" content={`https:${post.heroImage.file.url}`} />
            <meta name="twitter:domain" content="tennis247.net" />
          </Helmet>
          <div className={heroStyles.hero}>
            <img className={heroStyles.heroImage} alt={post.title} src={post.heroImage.file.url} />
            <div className={heroStyles.heroImageOverlayLeft} />
            <div className={heroStyles.heroImageOverlayRight} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <div className={styles.postDate}>
              {post.publishDate}
            </div>
            <div className={styles.postShareIcons}>
              <ReactShare
                  url={`https://www.tennis247.net/blog/${post.slug}`}
                  title={post.title}
                  facebook={true}
                  twitter={true}
                  iconSize={64}
              />
            </div>
            <div
              className={styles.postDescription}
              dangerouslySetInnerHTML={{
                __html: post.description.childMarkdownRemark.html
              }}
            />
            <div
              className={styles.postBody}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    contentfulBlogPost(slug: { eq: $slug }) {
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
          rawMarkdownBody
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
