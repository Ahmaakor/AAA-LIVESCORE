import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
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
                setData(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
            }
        }
        fetchData();
    }, []);

    return(
        <>
            {error && <div>Error: {error}</div>}
            {data && typeof data === 'object' && data.Img ? (
                <img src={`https://livescore-real-time.p.rapidapi.com/${data.Img}`} alt="Team Logo" style={{maxWidth: 200}} />
            ) : null}
            <pre>{data ? (typeof data === 'object' ? JSON.stringify(data, null, 2) : data) : 'Loading...'}</pre>
        </>
    );
}

export default Home;