import React from 'react'

import styles from './commercial.module.css'

export default ({ data }) => {

  let commercialBackground = '',
      commercialLink = '',
      commercialImage = '';

  switch(data.color) {
    case 'green':
      commercialBackground = styles.commercialBackgroundColorGreen;
      commercialLink = 'https://ads.mrgreen.com/redirect.aspx?pid=4582969&lpid=1665&bid=2822';
      commercialImage = 'https://images.ctfassets.net/i3fknvsch82a/7iBC8QriryW42yl6ufDCKZ/a291e5a92d3f00395a52045800b310bd/commercial_mrgreen.png';
      break;
    case 'orange':
      commercialBackground = styles.commercialBackgroundColorOrange;
      commercialLink = 'https://ads.leovegas.com/ad.aspx?bid=15232&pid=3639877&lpid=8';
      commercialImage = 'https://images.ctfassets.net/i3fknvsch82a/1S8BiUnTyD2x5hxmi4EQiY/d4c11a56914920f993f33f863c62eabf/commercial_leovegas.png';
      break;
    case 'blue':
      commercialBackground = styles.commercialBackgroundColorBlue;
      commercialLink = 'https://record.nordicbet.dk/_RhJZfw3OGM1jBJMkmH2mAmNd7ZgqdRLk/1/';
      commercialImage = 'https://images.ctfassets.net/i3fknvsch82a/2obZZaKFeMAG08zZZUN6Nq/c484d90abc44ef2ced28a11df85644a2/commercial_nordicbet.png';
      break;
    default:
  }

  return (
    <div className={commercialBackground}>
      <a href={commercialLink} target="_blank" rel="noopener nofollow">
        <img className={styles.commercialImage} src={commercialImage} />
      </a>
    </div>
  )
}
