import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageSearch from './components/PageSearch';

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
      </Switch>
    </>
  );
}

export default App;
