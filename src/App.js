import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageHome from './components/PageHome';
import PageSearch from './components/PageSearch';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>

        <Route path="/search/:query">
          <PageSearch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
