import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const Pokemon = lazy(() => import('./pages/Pokemon'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/pokedex/:page" component={Home} />
      <Route exact path="/pokedex/pokemon/:id" component={Pokemon} />
      <Redirect to="/pokedex/1" />
    </Switch>
  </Suspense>
);

export default routes;
