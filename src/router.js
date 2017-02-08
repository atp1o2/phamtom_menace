import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import Settings from './components/Settings';
import Contact from './components/Contact';

var routes = (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Contact" component={Contact} />
  </Route>
);

export default routes;
