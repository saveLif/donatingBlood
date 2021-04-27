import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
const App = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/a-propos" excat component = {About} />
          <Route component={Error} />
        </Switch>
        </BrowserRouter>
    );

};

export default App;