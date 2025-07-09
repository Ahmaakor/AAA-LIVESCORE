import React, { useState, useEffect } from 'react';
import styles from './Matches.module.css';
import Calendar from '../Calendar/Calendar';
import { getMatches } from '../../Data/Matches';
import Loading from '../Loading/Loading';

function Matches() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
  };

  const formatTime = (esd) => {
    const s = esd.toString();
    const hour = s.slice(8, 10);
    const minute = s.slice(10, 12);
    return `${hour}:${minute}`;
  };

  const fetchMatches = async (dateStr) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMatches(dateStr, 'soccer', '1');
      const stages = data?.Stages;

      if (stages && stages.length > 0) {
        setMatches(stages);
      } else {
        setMatches([]);
        setError('No matches found for selected date.');
      }
    } catch (err) {
      console.error('Error fetching matches:', err);
      setError('Error fetching matches.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMatches(formatDate(selectedDate));
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.liveBtn}>Live</div>
        <Calendar onDateChange={handleDateChange} />
      </header>

      {loading && <div className={styles.state}><Loading /></div>}
      {!loading && error && <div className={styles.state}>{error}</div>}
      {!loading && !error && matches.length === 0 && (
        <div className={styles.state}>No matches available for this date.</div>
      )}

      {!loading && !error && matches.length > 0 && (
        matches.map((section, i) => (
          <div key={i} className={styles.section}>
            <div className={styles.tournament}>
              <span className={styles.tournamentType}>{section.Snm}</span>
              <span className={styles.tournamentName}>{section.Cnm}</span>
            </div>

            {section.Events.map((match, idx) => (
              <div key={idx} className={styles.match}>
                <div className={styles.time}>{formatTime(match.Esd)}</div>
                <div className={styles.teams}>
                  <span className={styles.team}>{match.T1[0]?.Nm}</span>
                  <span className={styles.team}>{match.T2[0]?.Nm}</span>
                </div>
                <div className={styles.star}>☆</div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Matches;
