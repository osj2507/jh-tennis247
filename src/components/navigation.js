import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export const Navigation = () => {

  return (
  <nav role="navigation" className={styles.nav}>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/"><span className={styles.namePrimary}>TENNIS</span><span className={styles.nameSecondary}>24/7</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="/blog/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: styles.navigationItemLink + ' ' + styles.navigationItemLinkActive } : null
          }
        >
          BLOG
        </Link>
      </li>
      {/*<li className={styles.navigationItem}>
        <Link
          to="/blog/video/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
        >
          VIDEO
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="/blog/instagram/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
        >
          INSTAGRAM
        </Link>
      </li>*/}
    </ul>
  </nav>
  )
}

export default Navigation;
