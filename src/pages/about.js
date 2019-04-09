import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Hero from '../components/hero'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageInformation = get(this, 'props.data.allContentfulPage.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        {pageInformation.map(({ node }) => {
          return (
            <>
            <Hero data={node} />
            <div className="wrapper">
              <h1 className="section-headline">{node.header}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}
              />
            </div>
            </>
          )
        })}
      </Layout>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutIndexQuery {
    allContentfulPage(filter:{slug:{eq:"about"}}) {
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
