import React from 'react';
import styles from './Competitions.module.css';

const competitions = [
  { id: 1, name: "UEFA Champions League", country: "Europe" },
  { id: 2, name: "Premier League", country: "England" },
  { id: 3, name: "La Liga", country: "Spain" },
];

function Competitions() {
  return (
    <div className={styles.competitions}>
      <h2>Competitions</h2>
      <ul className={styles.competitionList}>
        {competitions.map(comp => (
          <li key={comp.id} className={styles.competitionCard}>
            <span className={styles.name}>{comp.name}</span>
            <span className={styles.country}>{comp.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competitions;