import React from 'react';
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import WatchList from './Components/WatchListPage/WatchList';
import Favourites from './Components/FavouritesPage/Favourites';
import Search from './Components/SearchPage/Search';
import TopRated from './Components/TopRatedPage/TopRated';
import Movies from './Components/Movies/Movies';
import TVShows from './Components/TVShows/TVShows';
import Seasons from './Components/TVShows/Seasons/Seasons';
import Persons from './Components/Persons/Persons';


const App = () => {


  return (
    <div >
      <Router>
        <Header />
        <Switch>

          <Route exact path="/React-Movie-App/" >
            <HomePage />
          </Route>

          <Route exact path="/Favourites" >
            <Favourites />
          </Route>

          <Route exact path="/WatchList">
            <WatchList />
          </Route>

          <Route exact path="/Search">
            <Search />
          </Route>

          <Route exact path="/TopRated">
            <TopRated />
          </Route>

          <Route exact path="/Movies/:id" component={Movies} />

          <Route exact path="/TVShows/:id" component={TVShows} />

          <Route exact path="/Persons/:id" component={Persons} />

          {/* <Route exact path="/Seasons/:id" component={Seasons} /> */}
        </Switch>

      </Router>

    </div>
  )
}

export default App;