import React, { useState } from 'react'
import styles from './Main.module.css';
import Sidebar from '../SIdebar/Sidebar';
import Played from '../Played/Played';
import Matches from '../Matches/Matches';
import Live from '../Live/Live';
import Competitions from '../Competitions/Competitions';
import Leagues from '../Leagues/Leagues';
import Teams from '../Teams/Teams';

function Main() {
  const [currentPage, setCurrentPage] = useState("matches");
  return (
    <main className={`container ${styles.main}`}>
      <Sidebar currentPage={currentPage} onNavChange={setCurrentPage} />
      <section className={styles.mainContent}>
        {currentPage === "matches" && <Matches />}
        {currentPage === "regions" && <Live />}
        {currentPage === "competitions" && <Competitions />}
        {currentPage === "leagues" && <Leagues />}
        {currentPage === "teams" && <Teams />}
      </section>
      <Played />
    </main>
  )
}

export default Main;