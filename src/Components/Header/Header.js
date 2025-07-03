import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topBar}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1>AAA LiveScore</h1>
          </div>
          <div className={styles.searchContainer}>
            <ion-icon name="search"></ion-icon>
            <input type="text" placeholder="Search for players, Leagues, Team and so on..." className={styles.searchInput} />
          </div>
          <div className={styles.actions}>
            <button className={styles.actionButton}>Sign Up</button>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <nav className={styles.bottomNav}>
            <Link to="/" className={`${styles.bottomNavLink} ${styles.active}`}>Home</Link>
            <Link to="/news" className={styles.bottomNavLink}>News</Link>
            <Link to="/live" className={styles.bottomNavLink}>Live</Link>
            <Link to="/results" className={styles.bottomNavLink}>Results</Link>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header