import React from 'react';
import styles from './Live.module.css';

const liveGames = [
  { id: 1, home: "PSG", away: "Marseille", score: "2 - 1", minute: "75'" },
  { id: 2, home: "Bayern", away: "Dortmund", score: "1 - 1", minute: "60'" },
];

function Live() {
  return (
    <div className={styles.live}>
      <h2>Live Matches</h2>
      <ul className={styles.liveList}>
        {liveGames.map(game => (
          <li key={game.id} className={styles.liveCard}>
            <span className={styles.teams}>{game.home} vs {game.away}</span>
            <span className={styles.score}>{game.score}</span>
            <span className={styles.minute}>{game.minute}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Live;