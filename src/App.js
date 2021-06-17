import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageSearch from './components/PageSearch';
import PageDetails from './components/PageDetails';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>

        <Route path="/search">
          <PageSearch />
        </Route>

        <Route path="/details/:id">
          <PageDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
