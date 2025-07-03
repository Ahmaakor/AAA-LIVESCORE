import React from 'react'
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
            <ion-icon name="search"></ion-icon>
            <input type="text" placeholder="Search for players, Leagues, Team and so on..." className={styles.searchInput} />
          </div>
  )
}

export default SearchBar