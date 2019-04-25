import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export const Navigation = () => {

  const navItems = ['blog', 'video', 'tweet'];

  return (
  <nav role="navigation" className={styles.nav}>
    <ul className={styles.navigation}>
      <li key="logo" className={styles.navigationItem}>
        <Link to="/"><span className={styles.namePrimary}>TENNIS</span><span className={styles.nameSecondary}>24/7</span></Link>
      </li>
      <li key="blog" className={styles.navigationItem}>
        <Link
          to="/blog/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: styles.navigationItemLink + ' ' + styles.navigationItemLinkActive } : null
          }
        >
          ARTIKLER
        </Link>
      </li>
      <li key="video" className={styles.navigationItem}>
        <Link
          to="/video/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: styles.navigationItemLink + ' ' + styles.navigationItemLinkActive } : null
          }
        >
          VIDEOER
        </Link>
      </li>
      <li key="tweet" className={styles.navigationItem}>
        <Link
          to="/tweet/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: styles.navigationItemLink + ' ' + styles.navigationItemLinkActive } : null
          }
        >
          TWEETS
        </Link>
      </li>
      <li key="calendar-women" className={styles.navigationItem}>
        <a
          className={styles.navigationItemLink}
          href="https://www.wtatennis.com/calendar"
          target="_blank"
          rel="noopener norefferer"
        >
          WTA KALENDER
        </a>
      </li>
      <li key="calendar-men" className={styles.navigationItem}>
        <a
          className={styles.navigationItemLink}
          href="https://www.atptour.com/en/tournaments"
          target="_blank"
          rel="noopener norefferer"
        >
          ATP KALENDER
        </a>
      </li>
      <li key="about" className={styles.navigationItem}>
        <Link
          to="/about/"
          className={styles.navigationItemLink}
          activeClassName={styles.navigationItemLinkActive}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: styles.navigationItemLink + ' ' + styles.navigationItemLinkActive } : null
          }
        >
          OM OS
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation;
