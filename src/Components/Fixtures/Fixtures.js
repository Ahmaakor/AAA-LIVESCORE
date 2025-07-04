import React from 'react'
import styles from './Fixtures.module.css'

function Fixtures() {
  return (
    <div className={styles.main_content}>
            <div className={styles.content}>
                <h1>Fixtures</h1>
            </div>
            <div className={styles.fixtures}>
                <h2>Fixtures</h2>
                <p>Check out the upcoming matches.</p>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Match 1</h3>
                        <p>Team A vs Team B</p>
                        <p>Date: 2023-10-01</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Match 2</h3>
                        <p>Team C vs Team D</p>
                        <p>Date: 2023-10-02</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Match 3</h3>
                        <p>Team E vs Team F</p>
                        <p>Date: 2023-10-03</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Fixtures