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
  const api_key = process.env.REACT_APP_API_KEY;


  return (
    <div >

        <Router>
          <Header />
          <Switch>

            <Route exact path="/React-Movie-App/" >
              <Home api_key = {api_key}/>
            </Route>

            <Route exact path="/TopRated">
              <TopRated api_key = {api_key} />
            </Route>

            <Route exact path="/Search">
              <Search api_key = {api_key} />
            </Route>

            <Route exact path="/MyLists">
              <MyLists api_key = {api_key} />
            </Route>

            <Route exact path="/Movie/:id" render={(props)=> <Movie {...props} api_key={api_key} />} />

            <Route exact path="/TV/:id" render={(props)=> <TV {...props} api_key={api_key} />} />

            <Route exact path="/Person/:id" render={(props)=> <Person {...props} api_key={api_key} />} />

          </Switch>

        </Router>
      </div>

  )
}

export default App;