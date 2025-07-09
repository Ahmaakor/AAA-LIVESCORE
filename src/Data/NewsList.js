import axios from 'axios';

export async function getNewsList() {
    const options = {
        method: 'GET',
        url: 'https://livescore-real-time.p.rapidapi.com/news/list',
        headers: {
            'x-rapidapi-key': '75ca0deb2fmshf72321e88e5311fp144cc3jsnfb5cef85173a',
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
