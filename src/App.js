import React, { Component } from 'react';
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


export class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/watchedList" component={WatchedList} />
            <Route path="/watchList" component={WatchList} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;