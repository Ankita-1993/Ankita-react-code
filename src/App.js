import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import ON from "./components/ON";
import OFF from "./components/OFF";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path='/' component={OFF} exact />
            <Route path='/nextpage' component ={ON}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
