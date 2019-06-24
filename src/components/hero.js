import React from 'react'

import styles from './hero.module.css'

export default ({ data, dataClass }) => (
  <div className={dataClass ? styles.hero + ' ' + styles.heightDefined : styles.hero}>
    <h1 className={styles.heroTitle}>{data.header}</h1>
    { data.subheader && <div className={styles.heroDate}>{data.subheader}</div>}
    <img className={styles.heroImage} src={data.heroImage.file.url} />
    <div className={styles.heroImageOverlayLeft} />
    <div className={styles.heroImageOverlayRight} />
  </div>
)
