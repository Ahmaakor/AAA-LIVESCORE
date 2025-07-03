import React from 'react'
import styles from "./Sidebar.module.css"
import { navData } from '../../Data/HomeNav'

function Sidebar({ currentPage, onNavChange }) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {navData.map((item) => (
          <button
            key={item.value}
            className={`${styles.navItem} ${currentPage === item.value ? styles.active : ''}`}
            onClick={() => onNavChange(item.value)}
            type="button"
          >
            <div className={styles.navIcon}>
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <span className={styles.navText}>{item.text}</span>
          </button>
        ))}
      </nav>
      {/* <div className={styles.userSection}>
        <img
          src="https://ui-avatars.com/api/?name=User"
          alt="User"
          className={styles.avatar}
        />
        <span className={styles.username}>Guest</span>
      </div> */}
    </aside>
  )
}

export default Sidebar