// import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [teamStats, setTeamStats] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            const options = {
                method: 'GET',
                url: 'https://livescore-real-time.p.rapidapi.com/teams/get-team-stats',
                params: {
                    id: '2881',
                    compId: '65'
                },
                headers: {
                    'x-rapidapi-key': '061a149e92mshb2466ca95bfcd43p11fe2cjsn32bd5e66de1b',
                    'x-rapidapi-host': 'livescore-real-time.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                setTeamStats(response.data);
            } catch (err) {
                setError('Failed to fetch team stats');
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Team Stats</h1>
            <pre style={{ textAlign: 'left', background: '#f4f4f4', padding: '1em' }}>
                {JSON.stringify(teamStats, null, 2)}
            </pre>
        </div>
    );
}

export default Home;