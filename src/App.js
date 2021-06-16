import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageHome from './components/PageHome';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
