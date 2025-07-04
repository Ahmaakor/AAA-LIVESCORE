import styles from './All.module.css';
// import React, { useState, useEffect, useRef } from 'react';
// import Hello from '../Hello/Hello';
// import SearchBar from '../SearchBar/SearchBar';

function All() {

    return (
        <main className={styles.mainContent}>

            <section className={styles.matchSection}>
                <h2>Next Big Matches</h2>
                <p>
                    Get a glimpse of the action. Visit the <strong>Fixtures</strong> page
                    for all upcoming matches.
                </p>
                <div className={styles.matchCards}>
                    <div className={styles.matchCard}>
                        <h3>Premier League</h3>
                        <p>Arsenal vs Manchester City</p>
                        <p>2025-07-05 | 18:00 GMT</p>
                    </div>
                    <div className={styles.matchCard}>
                        <h3>Champions League</h3>
                        <p>Barcelona vs Bayern Munich</p>
                        <p>2025-07-06 | 20:45 GMT</p>
                    </div>
                    <div className={styles.matchCard}>
                        <h3>AFCON Qualifier</h3>
                        <p>Nigeria vs Egypt</p>
                        <p>2025-07-07 | 17:00 GMT</p>
                    </div>
                </div>
            </section>

            <section className={styles.playersSection}>
                <h2>Top Players to Watch</h2>
                <ul className={styles.playerList}>
                    <li>
                        <strong>Erling Haaland</strong> (Man City) - The Norwegian striker continues to dominate with his incredible goal-scoring ability.
                    </li>
                    <li>
                        <strong>Kylian Mbappé</strong> (PSG) - The French forward is known for his blistering pace and technical skills.
                    </li>
                    <li>
                        <strong>Kevin De Bruyne</strong> (Man City) - The Belgian midfielder is a playmaking genius, orchestrating attacks with precision.
                    </li>
                </ul>
            </section>

            <section className={styles.statsSection}>
                <h2>Top Scorers This Season</h2>
                <ul className={styles.scorerList}>
                    <li>
                        <strong>Erling Haaland</strong> (Man City) – 28 goals
                    </li>
                    <li>
                        <strong>Kylian Mbappé</strong> (PSG) – 26 goals
                    </li>
                    <li>
                        <strong>Victor Osimhen</strong> (Napoli) – 24 goals
                    </li>
                </ul>
            </section>

            <section className={styles.ctaSection}>
                <h2>Explore Full Coverage</h2>
                <p>
                    Dive into complete fixtures, results, and team stats. Visit the{' '}
                    <strong>Leagues</strong> and <strong>Teams</strong> pages to get more
                    detailed insight.
                </p>
                <p>
                    Want to stay updated on the go? Download the AAA-LiveScore app for
                    real-time notifications!
                </p>
            </section>
        </main>
    );
}

export default All;
