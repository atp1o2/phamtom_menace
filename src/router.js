import React from 'react';
import { Route } from 'react-router';
import About from './components/About';
import Home from './components/Home';

var routes = (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/About" component={About} />
  </Route>
);

export default routes;
