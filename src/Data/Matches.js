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
      'x-rapidapi-key': '6bc0845dfcmsh3eba632a4b95e8bp1b7757jsne2fc53a9afac',
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