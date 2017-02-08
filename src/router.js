import React from 'react';
import { Route } from 'react-router';
import Index from './components/Index';
import Settings from './components/Settings';
import Contact from './components/Contact';

var routes = (
  <Route>
    <Route path="/" component={Index} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Contact" component={Contact} />
  </Route>
);

export default routes;
