const API_KEY = 'a55b5853'; // Replace with your actual API key
const BASE_URL = 'https://www.omdbapi.com/?';


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}apikey=${API_KEY}&s=Marvel`);
    const data = await response.json();
    // console.log(data.Search);
    return (data.Search);
};

 export const searchMovies = async (query) => {
     const response = await fetch(`${BASE_URL}apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
     const data = await response.json();
     console.log(data.results);
     return data.Search
 };
