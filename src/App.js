import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageSearch from './components/PageSearch';
import PageDetails from './components/PageDetails';
import PageWatchList from './components/PageWatchList';

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

        <Route path="/my-watch-list">
          <PageWatchList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
