import axios from 'axios';

const KEY = '34377487-34dfc22cd0267d3510191dd51';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = async (query, page) => {
  try {
    const { data } = await axios.get('', {
      params: { q: query, page },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};
const api = {
  fetchImages,
};

export default api;
