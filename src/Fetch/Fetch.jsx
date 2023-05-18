import axios from 'axios';

const API_KEY = '1d0b85669559d62cd8b3ce22637ebdbb';
// baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export async function fetchMoviesTrending() {
  const { data } = await axios.get(`trending/movie/day`, {
    params: { api_key: API_KEY },
  });
  // console.log(data.results);
  return data.results;
};
export async function fetchMoviesSearch(query, page) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
      query,
    },
  });

  return data.results;
}

export async function getMovieDetalis(id) {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
}
export async function getMovieCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  console.log(data.results);
  return data.cast;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews
`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    }
  );
  return data.results;
}