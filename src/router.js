import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import Settings from './components/Settings';
import Contact from './components/Contact';

var routes = (
  <Route>
    <IndexRoute component={Home} />
    <Route path="/Record/:id" component={Contact} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Contact" component={Contact} />
  </Route>
);

export default routes;
