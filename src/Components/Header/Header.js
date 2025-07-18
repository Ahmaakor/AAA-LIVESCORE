// import React, { useState, UseEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topBar}>
          <div className={styles.logoContainer}>
            <Logo className={styles.logo} />
            <h1>AAA LiveScore</h1>
          </div>
          
          <div className={styles.search_desktop}>
            <SearchBar />
          </div>

          <div className={styles.actions}>
            <Link to='/settings' className={styles.actionButton}><ion-icon name="settings-outline"></ion-icon></Link>
          </div>
        </div>

        <div className={styles.search_mobile}>
          <SearchBar />
        </div>

        <div className={styles.bottomBar}>
          <nav className={styles.bottomNav}>
            <Link
              to="/"
              className={`${styles.bottomNavLink} ${location.pathname === '/' ? styles.active : ''}`}
            >
              Scores
            </Link>
            <Link
              to="/news"
              className={`${styles.bottomNavLink} ${location.pathname.startsWith('/news') ? styles.active : ''}`}
            >
              News
            </Link>
            <Link
              to="/favourites"
              className={`${styles.bottomNavLink} ${location.pathname.startsWith('/favourites') ? styles.active : ''}`}
            >
              Favourites
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header