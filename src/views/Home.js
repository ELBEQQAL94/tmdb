import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { get_top_rated_movies, get_top_rated_tvShows } from '../api';

const Home = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTvShows, setTopRatedTvShows] = useState([]);

    useEffect(() => {
        get_top_rated_movies()
          .then(async (res) => {
            await setTopRatedMovies(res.results);
          })
          .catch((error) => console.log(error));
        get_top_rated_tvShows()
          .then(async (res) => {
            await setTopRatedTvShows(res.results);
          })
          .catch((error) => console.log(error));
      }, []);

    console.log('Top Rated Movies:', topRatedMovies);
    console.log('Top Rated Tv Shows:', topRatedTvShows);

    return (
        <section className="landing_page">
            <Container>
                <h1>Landing Page</h1>
            </Container>
        </section>
    );
};

export default Home;