import React from 'react';
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
import Search from './Components/SearchPage/Search';
import TopRated from './Components/TopRatedPage/TopRated';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import TVDetails from './Components/TVDetails/TVDetails';

const App = () => {


  return (
    <Router>
      <div >
        <Nav />
        <Switch>

          <Route path="/React-Movie-App/" exact>
            <HomePage />
          </Route>

          <Route path="/watchedList" >
            <WatchedList />
          </Route>

          <Route path="/watchList">
            <WatchList />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/topRated">
            <TopRated />
          </Route>

          <Route path="/movieDetails/:id" component={MovieDetails} exact />

          <Route path="/TVDetails/:id" component={TVDetails} />

        </Switch>

      </div>
    </Router>
  )
}

export default App;