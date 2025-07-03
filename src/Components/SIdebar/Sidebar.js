import React from 'react'
import styles from "./Sidebar.module.css"
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link to="/" className={`${styles.navItem} ${styles.active}`}>
          <div className={styles.navIcon}>
            <ion-icon name="football"></ion-icon>
          </div>
          <span className={styles.navText}>Home</span>
        </Link>
        <Link to="/fixtures" className={styles.navItem}>
          <div className={styles.navIcon}>
            <ion-icon name="calendar"></ion-icon>
          </div>
          <span className={styles.navText}>Fixtures</span>
        </Link>
        <Link to="/" className={styles.navItem}>
          <div className={styles.navIcon}>
            <ion-icon name="radio-button-on"></ion-icon>
          </div>
          <span className={styles.navText}>Live</span>
        </Link>
        <Link to="/" className={styles.navItem}>
          <div className={styles.navIcon}>
            <ion-icon name="podium"></ion-icon>
          </div>
          <span className={styles.navText}>Competitions</span>
        </Link>
        <Link to="/" className={styles.navItem}>
          <div className={styles.navIcon}>
            <ion-icon name="list"></ion-icon>
          </div>
          <span className={styles.navText}>Leagues</span>
        </Link>
        <Link to="/" className={styles.navItem}>
          <div className={styles.navIcon}>
            <ion-icon name="shield"></ion-icon>
          </div>
          <span className={styles.navText}>Teams</span>
        </Link>
      </nav>
      <div className={styles.userSection}>
        <img
          src="https://ui-avatars.com/api/?name=User"
          alt="User"
          className={styles.avatar}
        />
        <span className={styles.username}>Guest</span>
      </div>
    </aside>
  )
}

export default Sidebar