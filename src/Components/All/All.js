import React from 'react';
import styles from './All.module.css';

function All() {
  return (
    <div className={styles.main_content}>
      {/* Hero Section */}
      <div className={styles.content}>
        <div className={styles.overlay}>
          <h1>Welcome to AAA-LiveScore</h1>
          <p>
            Your trusted football companion for live scores, match alerts,
            league standings, breaking news, and real-time stats — covering
            top leagues and global tournaments.
          </p>
          <p>
            Experience football in real-time. From kickoff to final whistle,
            we’ve got every moment covered.
          </p>
        </div>
      </div>

      {/* Fixtures Section */}
      <div className={styles.fixtures}>
        <h2>Next Big Matches</h2>
        <p>
          Get a glimpse of the action. Visit the <strong>Fixtures</strong> page
          for all upcoming matches.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Premier League</h3>
            <p>Arsenal vs Manchester City</p>
            <p>2025-07-05 | 18:00 GMT</p>
          </div>
          <div className={styles.card}>
            <h3>Champions League</h3>
            <p>Barcelona vs Bayern Munich</p>
            <p>2025-07-06 | 20:45 GMT</p>
          </div>
          <div className={styles.card}>
            <h3>AFCON Qualifier</h3>
            <p>Nigeria vs Egypt</p>
            <p>2025-07-07 | 17:00 GMT</p>
          </div>
        </div>
      </div>

      {/* News Highlights */}
      <div className={styles.news}>
        <h2>Latest Football News</h2>
        <div className={styles.newsCards}>
          <div className={styles.newsCard}>
            <h4>Transfer Window Heats Up</h4>
            <p>
              Manchester United and PSG battle for Napoli’s rising star in a
              €100M deal.
            </p>
          </div>
          <div className={styles.newsCard}>
            <h4>Ronaldo Hits 3 Again!</h4>
            <p>
              Cristiano Ronaldo scores another hat-trick for Al Nassr in a
              stunning 4-1 victory.
            </p>
          </div>
        </div>
      </div>

      {/* Top Scorers */}
      <div className={styles.stats}>
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
      </div>

      {/* Call-to-Action */}
      <div className={styles.cta}>
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
      </div>
    </div>
  );
}

export default All;
