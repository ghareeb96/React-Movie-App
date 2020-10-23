import React, { useState } from 'react';
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

  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div >
        <Nav />
        <Switch>

          <Route path="/" exact>
            <HomePage
              searchText={searchText}
              setSearchText={setSearchText}
              movies={movies}
              setMovies={setMovies}
            />
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