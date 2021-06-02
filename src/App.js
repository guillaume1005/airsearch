import React from "react";
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";

function App() {
  return (
    // BEM
    <div className="App">
      <Router>

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>

    
  );
}

export default App;
