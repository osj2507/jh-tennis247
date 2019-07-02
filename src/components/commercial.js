import React from 'react'

import styles from './commercial.module.css'

class Commercial extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const scriptTagVertical=document.createElement('script')
    scriptTagVertical.src='https://embed.bannerflow.com/58e6a9b21239fe392477d41d?targetwindow=_blank&targeturl=http://record.nordicbet.com/_RhJZfw3OGM0KiOCcz8iHuwbYqNxFz0bP/1/&media=140495&campaign=1'
    scriptTagVertical.async=true;

    const scriptTagHorizontal=document.createElement('script')
    scriptTagHorizontal.src='https://embed.bannerflow.com/58e6a9b21239fe392477d41d?targetwindow=_blank&targeturl=http://record.nordicbet.com/_RhJZfw3OGM0KiOCcz8iHuwbYqNxFz0bP/1/&media=140495&campaign=1'
    scriptTagHorizontal.async=true;

    switch(this.props.data.direction) {
      case 'horizontal':
        this.instance.appendChild(scriptTagHorizontal)
        break;
      case 'vertical':
        this.instance.appendChild(scriptTagVertical)
        break;
      default:
    }
  }

  render() {
    return (
      <div ref={el => (this.instance = el)} className={styles.commercial} />
    );
  }
}

export default Commercial