import React from 'react';
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import TopRated from './Pages/TopRated/TopRated';
import Search from './Pages/Search/Search';
import MyLists from "./Pages/MyLists/MyLists"
import Movie from './Pages/Movie/Movie';
import TV from './Pages/TV/TV';
import Person from './Pages/Person/Person';


const App = () => {


  return (
    <div >
      <div className="container">

        <Router>
          <Header />
          <Switch>

            <Route exact path="/React-Movie-App/" >
              <Home />
            </Route>

            <Route exact path="/TopRated">
              <TopRated />
            </Route>

            <Route exact path="/Search">
              <Search />
            </Route>

            <Route exact path="/MyLists">
              <MyLists />
            </Route>

            <Route exact path="/Movie/:id" component={Movie} />

            <Route exact path="/TV/:id" component={TV} />

            <Route exact path="/Person/:id" component={Person} />

          </Switch>

        </Router>
      </div>

    </div>
  )
}

export default App;