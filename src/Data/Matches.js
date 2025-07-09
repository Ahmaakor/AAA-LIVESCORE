import axios from 'axios';

export async function getMatches(date, category, timezone) {
  const options = {
    method: 'GET',
    url: 'https://livescore-real-time.p.rapidapi.com/matches/list-by-date',
    params: {
      date: date,
      category: category,
      timezone: timezone,
    },
    headers: {
      'x-rapidapi-key': '75ca0deb2fmshf72321e88e5311fp144cc3jsnfb5cef85173a',
      'x-rapidapi-host': 'livescore-real-time.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}