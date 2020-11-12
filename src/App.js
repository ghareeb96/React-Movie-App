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
import Person from './Components/Person/Person';


const App = () => {


  return (
    <div >
      <Router>
        <Nav />
        <Switch>

          <Route exact path="/React-Movie-App/" >
            <HomePage />
          </Route>

          <Route exact path="/watchedList" >
            <WatchedList />
          </Route>

          <Route exact path="/watchList">
            <WatchList />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/topRated">
            <TopRated />
          </Route>

          <Route exact path="/movieDetails/:id" component={MovieDetails} />

          <Route exact path="/TVDetails/:id" component={TVDetails} />

          <Route exact path="/Person/:id" component={Person} />

        </Switch>

      </Router>

    </div>
  )
}

export default App;