import React from 'react';
import styles from './Matches.module.css';
import Calender from '../Calendar/Calendar';
import { matches } from './data';

function Matches() {
  const handleDateChange = (date) => {
    console.log('Selected Date:', date.toDateString());
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.liveBtn} >Live</div>
        <Calender onDateChange={handleDateChange} />
      </header>
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
