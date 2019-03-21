import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article, type }) => (
  <div className={styles.previewWrapper}>
    { type === 'post' && (
      <>
        <Img alt={article.title} fluid={article.heroImage.fluid} />
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <small>{article.publishDate}</small>
          <p
            className={styles.previewDescription}
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </>
      )
    }
    {
      type === 'video' && (
      <>
        <iframe width="100%" height="190" src={'https://www.youtube.com/embed/' + article.url.replace('https://youtu.be/', '')} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            {article.title}
          </h3>
          <small>{article.publishDate}</small>
        </div>
      </>
      )
    }
    {
      type === 'twitter' && (
      <>
        <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">650 IT leaders described the biggest digital transformation challenges and opportunities they&#39;re facing in 2019. See what they said!</p>&mdash; MuleSoft (@MuleSoft) <a href="https://twitter.com/MuleSoft/status/1100507025153306625?ref_src=twsrc%5Etfw">February 26, 2019</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            {article.title}
          </h3>
          <small>{article.publishDate}</small>
        </div>
      </>
      )
    }
  </div>
)
