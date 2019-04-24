import React from 'react'
import { Link } from 'gatsby'

import styles from './article-preview.module.css'

export default ({ data, type }) => (
  <>
    { type === 'post' && (
      <div className={styles.previewWrapper}>
        <img className={styles.previewImage} src={data.heroImage.file.url} />
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            <Link to={`/blog/${data.slug}`}>{data.title}</Link>
          </h3>
          <small>{data.publishDate}</small>
          <div
            className={styles.previewDescription}
            dangerouslySetInnerHTML={{
              __html: data.description.childMarkdownRemark.html
            }}
          />
        </div>
      </div>
      )
    }
    {
      type === 'video' && (
      <div className={styles.previewWrapper}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.url.childMarkdownRemark.html
          }}
        />
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            {data.title}
          </h3>
          <small>{data.publishDate}</small>
          { data.description && (
          <div
            className={styles.previewDescription}
            dangerouslySetInnerHTML={{
              __html: data.description.childMarkdownRemark.html
            }}
          />
          )}
        </div>
      </div>
      )
    }
    {
      type === 'tweet' && (
        <div
          dangerouslySetInnerHTML={{
            __html: data.url.childMarkdownRemark.html
          }}
        />
      )
    }
  </>
)
