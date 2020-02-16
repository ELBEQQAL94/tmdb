import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './views/Home';
import Movies from './views/Movies';
import TvShows from './views/TvShows';


import PageNotFound from './views/PageNotFound';

const Routers = () => (
  <Router>
    <Header />
    <Switch>
      <Route restricted={false} component={Home} path="/" exact />
      <Route restricted={false} component={Movies} path="/movies" />
      <Route restricted={false} component={TvShows} path="/tv-shows" />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routers;