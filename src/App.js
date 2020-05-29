import React, { Component } from 'react';
import Navbar from "./navbar/Navbar";
import Timeline from "./timeline/Timeline";
import {BrowserRouter, Route} from "react-router-dom";
import Animatoren from "./animatoren/Animatoren";

class App extends Component {

  render() {
    return (
      <div>

          <BrowserRouter>
              <div style={{backgroundColor: "#0569AB", minHeight: "100vh"}}>
                  <Navbar/>
                  <Route path="/" exact component={ Timeline }/>
                  <Route path="/animatoren" exact component={ Animatoren }/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
