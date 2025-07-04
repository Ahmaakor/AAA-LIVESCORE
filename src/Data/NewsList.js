import axios from 'axios';

export async function getNewsList() {
    const options = {
        method: 'GET',
        url: 'https://livescore-real-time.p.rapidapi.com/news/list',
        headers: {
            'x-rapidapi-key': '6bc0845dfcmsh3eba632a4b95e8bp1b7757jsne2fc53a9afac',
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
