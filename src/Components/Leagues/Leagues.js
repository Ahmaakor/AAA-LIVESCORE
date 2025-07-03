import React from 'react';
import styles from './Leagues.module.css';

const leagues = [
  { id: 1, name: "Bundesliga", country: "Germany" },
  { id: 2, name: "Serie A", country: "Italy" },
  { id: 3, name: "Ligue 1", country: "France" },
];

function Leagues() {
  return (
    <div className={styles.leagues}>
      <h2>Leagues</h2>
      <ul className={styles.leagueList}>
        {leagues.map(league => (
          <li key={league.id} className={styles.leagueCard}>
            <span className={styles.name}>{league.name}</span>
            <span className={styles.country}>{league.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leagues;