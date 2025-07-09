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
      setError(`Error fetching matches: ${err.message}`);
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
        matches.map((section, i) => {
          let badgeUrl;

          if (section.badgeUrl) {
            badgeUrl = `https://static.livescore.com/competition/high/${section.badgeUrl}`;
          } else if (section.CnmT === "womens-euro") {
            badgeUrl = 'https://static.livescore.com/i2/fh/euro-women.jpg';
          } else if (section.CnmT?.toLowerCase().includes('friendlies')) {
            badgeUrl = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTAzNjNDOTgzRjM3REYxMUE4MENGQjZDNzNDMTM1QjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUQ4NTU4MUY3NURDMTFFNkJGMjJBQUY0NjBGOTJBODciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUQ4NTU4MUU3NURDMTFFNkJGMjJBQUY0NjBGOTJBODciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUY2RTREQ0NEQTc1RTYxMUFBRTBBNkM5RUY4MzU5MzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzNjNDOTgzRjM3REYxMUE4MENGQjZDNzNDMTM1QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAeADIDAREAAhEBAxEB/8QAkQAAAwADAQAAAAAAAAAAAAAABAUGAwcIAgEAAQUBAQAAAAAAAAAAAAAABAECAwUGAAcQAAEDAgQEBQMCBwAAAAAAAAECAwQRBQAhEgYxQSITYTIzFAdRcZFTCKFCUiM0FRYRAAEDAgQCCAYDAAAAAAAAAAEAEQIxAyFBEgRRBfBhgZGhIjITscHR8UIUYiMV/9oADAMBAAIRAxEAPwCTuO3Y0SJImrMhT0ZK+iMhJddrQilMjRWflHjjezsRjF8xwWKt7qUpCODHjQKWecfZRadzdhbJckqW4+zkgtFZSEuJr6ulKuQrzwIKxuNi/TtR4x1WnfDPj9Fn3VvAXdTsJjW1bUklDqalx1Sc01BKAlNfucE7jce55fxUW02ptNI4y+CXbfsjMl5btwcUWmVttiGlSg64t0gJPT1aQDU0zxDZ28SXl3KbcbmUQ0anPIMrON8ZQFSHnfdyWWHAUIZQoawkkE9agSPpl+cE/owcqvPNZsAwJVHZtq220B0xW0hbp6l06tPIVNTiezZhCgQl/dzuM5TP2bf1V5a+dXm/OJMPFRaz4IWw37ZN63LOs8C2TbhFt6St+9rkpYHUSkFplLderPTVXDPGNuc2vSODBa63ymzEYuU7+WPgy/I2+mZtV5UuK2kuTLYv1VIPVVGkJSuhzpStc88Ptc2kcJpf8uMDqjVc6NpoCCKKTkUnjUcsXVoghCTcFbMiOTbK1GH+tVJZUlIVKCayVq016kp1aQmukVxZReOSop6bpPmY8Mk+tsi6SExXNbZad7hcPaU2oJFNP9tw6uNQfuDhXJUMhAOPmnPI1Nfp4YVRLz7aN+mn06cOWG6Qn6it1WX422LBuM+5RLS01LuTokTANXbU4E6dQaroHM0A4knnjzp16KyC+VfleyfHdpEy4Ne5W4glmIhxLbiyFJSAgEGvm+mVMIlXN/yi5tt277X31Z2EtWzcjJlPxUgZPMLSHCpI6dQ7gCqcVJJ54v8AlF80OSqOZWXBapCPt24oE4rTGe7imqa8lJyVw4gY1sLglRY67t5QqEm3XeVxYxajONlUpZcQqp7rVRRZbKeGojjXjXEF4sjNpb1Fzl3FLo2/7wl22MIIdDQ0S0roFPKJIHWeHTSnjgf3i4RMtlBpE9nUiP8Atbl+pM8/f9Jn/D/HHx4Yj989deqid+nH+Ppap9S2f+2t75qQqQxuJhxzaiw6uNKnKpKRISoDQ2lZDxSqp1a00yyNcjhlsUu/dbZtk3G4WZy+X9Vlv7TFIzD7Ml+O9EU6dStUdl3Q4hVfuMqcDjgkKhPkiNYo2zdhRNuS1z7CzHne1uLiFtl50vo79G1pS4kJWP5k88ic8W3LKlA72gSHavfFxX2+olk6qEig1ClcsanbEus9vRHRXNYdwFxU1fcTocGkJzqC2B0nKuZOG3yXon7WI01+6SOJc1DSoaqilNVa8qUGA5Eo6ICP03f+sel4cfx5v44je50Zd/X0df/Z';
          } else {
            badgeUrl = `https://static.livescore.com/i2/fh/${section.CnmT}.jpg`;

          }
          return (
            <div key={i} className={styles.section}>
              <div className={styles.tournament}>
                {badgeUrl && (
                  <span className={styles.tournamentFlag}>
                    <img src={badgeUrl} alt={section.Cnm} />
                  </span>
                )}
                <div className={styles.tournamentInfo}>
                  <span className={styles.tournamentType}>{section.Snm}</span>
                  <span className={styles.tournamentName}>{section.Cnm}</span>
                </div>
              </div>

              {section.Events.map((match, idx) => (
                <div key={idx} className={styles.match}>
                  <div className={styles.time}>{match.Eps === "NS" ? formatTime(match.Esd) : match.Eps}</div>
                  <div className={styles.teams}>
                    <span className={styles.team}><img src={`https://lsm-static-prod.livescore.com/medium/${match.T1[0].Img}`} alt={match.T1[0].Nm} /><span className={styles.teamName}>{match.T1[0].Nm}</span></span>
                    <span className={styles.team}><img src={`https://lsm-static-prod.livescore.com/medium/${match.T2[0].Img}`} alt={match.T2[0].Nm} /><span className={styles.teamName}>{match.T2[0].Nm}</span></span>
                  </div>
                  <div className={styles.star}>☆</div>
                </div>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Matches;
