// import axios from "axios";

// axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

// export const fetchImage = async (searchQuery, page = 1) => {
//   const response = await axios.get("/search", {
//     params: {
//       query: searchQuery,
//       hitsPerPage: 12,
//       page,
//     },
//   });

//   return response.data.results;
// };

// export default fetchImage

import axios from 'axios';

const keyApi = 'j8mwuEzXXDVbkH9vsBT4J87zTY5-htK4ubdBk_5HGxo';

async function fetchImages(searchQuery, page = 1) {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: searchQuery,
        page: page,
        per_page: 12 
      },
      headers: {
        Authorization: `Client-ID ${keyApi}`
      }
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export default fetchImages;