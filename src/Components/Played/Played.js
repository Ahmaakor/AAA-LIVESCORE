import React from 'react'
import styles from './Played.module.css'

const playedGames = [
  {
    id: 1,
    home: 'Team A',
    away: 'Team B',
    homeScore: 2,
    awayScore: 1,
    date: '2025-07-02',
    status: 'FT'
  },
  {
    id: 2,
    home: 'Team C',
    away: 'Team D',
    homeScore: 0,
    awayScore: 0,
    date: '2025-07-01',
    status: 'FT'
  },
  {
    id: 3,
    home: 'Team E',
    away: 'Team F',
    homeScore: 3,
    awayScore: 2,
    date: '2025-06-30',
    status: 'FT'
  }
]

function Played() {
  return (
    <div className={styles.played}>
      <h2 className={styles.title}>Played Games</h2>
      <div className={styles.gamesList}>
        {playedGames.map(game => (
          <div key={game.id} className={styles.gameCard}>
            <div className={styles.teams}>
              <span className={styles.team}>{game.home}</span>
              <span className={styles.score}>{game.homeScore} - {game.awayScore}</span>
              <span className={styles.team}>{game.away}</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.status}>{game.status}</span>
              <span className={styles.date}>{game.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Played