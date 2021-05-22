import React from 'react';
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
// import WatchList from './Pages/WatchListPage/WatchList';
// import Favourites from './Pages/FavouritesPage/Favourites';
// import Search from './Pages/SearchPage/Search';
// import TopRated from './Pages/TopRatedPage/TopRated';
// import Movies from './Pages/Movies/Movies';
// import TVShows from './Pages/TVShows/TVShows';
// import Persons from './Pages/Persons/Persons';


const App = () => {


  return (
    <div >
      <div className="container">

        <Router>
          <Header />
          <Switch>

            <Route exact path="/React-Movie-App/" >
              <HomePage />
            </Route>

            {/* <Route exact path="/Favourites" >
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

          <Route exact path="/Persons/:id" component={Persons} /> */}

          </Switch>

        </Router>
      </div>

    </div>
  )
}

export default App;