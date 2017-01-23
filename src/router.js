import React from 'react';
import { Route } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import Task from './components/Task';

var routes = (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Task" component={Task} />
  </Route>
);

export default routes;
