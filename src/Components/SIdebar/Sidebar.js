import React from 'react'
import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>AAA</span>
        <span className={styles.logoSub}>LiveScore</span>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>Live Scores</a>
        <a href="#" className={styles.navItem}>News</a>
        <a href="#" className={styles.navItem}>Standings</a>
        <a href="#" className={styles.navItem}>Teams</a>
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