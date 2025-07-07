import React from 'react';
import styles from './Matches.module.css';
import { matches } from './data';

function Matches() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Today</h2>
      {matches.map((section, i) => (
        <div key={i} className={styles.section}>
          <div className={styles.tournament}>
            <span>{section.name}</span>
            <span className={styles.country}>{section.country}</span>
          </div>
          {section.games.map((match, idx) => (
            <div key={idx} className={styles.match}>
              <div className={styles.time}>{match.time}</div>
              <div className={styles.teams}>
                <span className={styles.team}>{match.team1}</span>
                <span className={styles.team}>{match.team2}</span>
              </div>
              <div className={styles.star}>☆</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Matches;
