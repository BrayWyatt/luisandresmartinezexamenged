import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Inicio from "./components/Inicio/Inicio";
import Tablero from "./components/Tablero/Tablero";

class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={Inicio} />
            <Route path ="/tablero" component={Tablero} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
