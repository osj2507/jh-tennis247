import React from 'react'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <h1 className={styles.heroTitle}>{data.header}</h1>
    <img className={styles.heroImage} src={data.heroImage.file.url} />
    <div className={styles.heroImageOverlayLeft} />
    <div className={styles.heroImageOverlayRight} />
  </div>
)
