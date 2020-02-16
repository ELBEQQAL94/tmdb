import axios from 'axios';

export const get_top_rated_movies = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.data)
    .catch(err => console.log(err));
};

export const get_top_rated_tvShows = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.data)
    .catch(err => console.log(err));
};