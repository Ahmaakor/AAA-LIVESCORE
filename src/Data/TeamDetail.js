import axios from 'axios';

export async function getTeamDetail() {
    const options = {
        method: 'GET',
        url: 'https://livescore-real-time.p.rapidapi.com/teams/detail',
        params: {id: '2881'},
        headers: {
            'x-rapidapi-key': '061a149e92mshb2466ca95bfcd43p11fe2cjsn32bd5e66de1b',
            'x-rapidapi-host': 'livescore-real-time.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data; // Assuming the response has an 'articles' field
    } catch (error) {
        console.error(error);
        return null;
    }
}
