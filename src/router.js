import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './views/Home/Home.jsx'
import Blog from './views/Blog/Blog.jsx'
import Contact from './views/Contact/Contact.jsx'
import Me from './views/Me/Me.jsx'
import Panatural from './views/Panatural/Panatural.jsx'
import Portfolio from './views/Portfolio/Portfolio.jsx'
import Wood from './views/Wood/Wood.jsx'
import Work from './views/Work/Work.jsx'

var routes = (
  <Route>
    <IndexRoute component={Home} />
    <Route path="Blog" component={Blog} />
    <Route path="Contact" component={Contact} />
    <Route path="Panatural" component={Panatural} />
    <Route path="Portfolio" component={Portfolio} />
    <Route path="Wood" component={Wood} />
    <Route path="About/">
      <Route path="Me" component={Me} />
      <Route path="Work" component={Work} />
    </Route>
  </Route>
);

export default routes;
