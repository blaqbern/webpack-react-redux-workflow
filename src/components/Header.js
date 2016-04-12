import React, { PropTypes } from 'react'
import styles from './css/Header.css'

function Header({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  )
}
Header.propTypes = { title: PropTypes.string }

export default Header
