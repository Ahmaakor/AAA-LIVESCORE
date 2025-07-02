import React from 'react'
import logo from '../../Assets/Images/logo.svg'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1>AAA LiveScore</h1>
        </div>
        <p>Get live scores of football matches, news, and updates.</p>

      </div>
    </header>
  )
}

export default Header