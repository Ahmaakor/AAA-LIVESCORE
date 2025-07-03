import React from 'react';
import styles from './Teams.module.css';

const teams = [
  { id: 1, name: "Manchester United", country: "England" },
  { id: 2, name: "Juventus", country: "Italy" },
  { id: 3, name: "PSG", country: "France" },
];

function Teams() {
  return (
    <div className={styles.teams}>
      <h2>Teams</h2>
      <ul className={styles.teamList}>
        {teams.map(team => (
          <li key={team.id} className={styles.teamCard}>
            <span className={styles.name}>{team.name}</span>
            <span className={styles.country}>{team.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;