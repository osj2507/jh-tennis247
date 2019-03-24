import React from 'react'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <img className={styles.heroImage} src={data.heroImage.file.url} />
    <div className={styles.heroImageOverlayLeft} />
    <div className={styles.heroImageOverlayRight} />
  </div>
)
