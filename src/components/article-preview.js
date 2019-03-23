import React from 'react'
import { Link } from 'gatsby'

import styles from './article-preview.module.css'

export default ({ article, type }) => (
  <div className={styles.previewWrapper}>
    { type === 'post' && (
      <>
        <img className={styles.previewImage} src={article.heroImage.file.url} />
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
  </div>
)
