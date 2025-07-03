import React from 'react';
import styles from './Matches.module.css';

const matches = [
  { id: 1, home: "Arsenal", away: "Chelsea", time: "18:00", status: "Upcoming" },
  { id: 2, home: "Liverpool", away: "Man City", time: "20:00", status: "Upcoming" },
  { id: 3, home: "Barcelona", away: "Real Madrid", time: "22:00", status: "Upcoming" },
];

function Matches() {
  return (
    <div className={styles.matches}>
      <h2>Upcoming Matches</h2>
      <ul className={styles.matchList}>
        {matches.map(match => (
          <li key={match.id} className={styles.matchCard}>
            <span className={styles.teams}>{match.home} vs {match.away}</span>
            <span className={styles.time}>{match.time}</span>
            <span className={styles.status}>{match.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matches;