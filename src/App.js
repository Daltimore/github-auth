import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css'

import Home from './components/Home'

function App() {
  return (
      <Router>
        <Switch>
          {/* <Route exact path="/login" component={Login}/> */}
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
