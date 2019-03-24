import React from 'react'
import { Link } from 'gatsby'

import styles from './article-preview.module.css'

export default ({ data, type }) => (
  <div className={styles.previewWrapper}>
    { type === 'post' && (
      <>
        <img className={styles.previewImage} src={data.heroImage.file.url} />
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            <Link to={`/blog/${data.slug}`}>{data.title}</Link>
          </h3>
          <small>{data.publishDate}</small>
          <p
            className={styles.previewDescription}
            dangerouslySetInnerHTML={{
              __html: data.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </>
      )
    }
    {
      type === 'video' && (
      <>
        <iframe width="100%" height="190" src={'https://www.youtube.com/embed/' + data.url.replace('https://youtu.be/', '')} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className={styles.previewContent}>
          <h3 className={styles.previewTitle}>
            {data.title}
          </h3>
          <small>{data.publishDate}</small>
        </div>
      </>
      )
    }
  </div>
)
