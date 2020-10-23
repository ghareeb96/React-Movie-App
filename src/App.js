import React, { useState, useEffect } from 'react';
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import WatchList from './Components/WatchListPage/WatchList';
import WatchedList from './Components/WatchedListPage/WatchedList';

const App = () => {
  return (
    <Router>
      <div >
        <Nav />
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/watchedList" >
            <WatchedList />
          </Route>

          <Route path="/watchList">
            <WatchList />
          </Route>

        </Switch>

      </div>
    </Router>
  )
}

export default App;