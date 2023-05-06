import axios from 'axios';

export const fetchHitsByQuery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    method: 'get',
    params: {
      key: '34377487-34dfc22cd0267d3510191dd51',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
};
