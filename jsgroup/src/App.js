import React from 'react';
import { Route, Switch } from "react-router";
import Homepage from './components/home';
import Schedule from './components/schedule';
import Navbar from './components/navbar';
import Notfound from './components/notfound'
import './App.css';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/schedule" component={Schedule} />
        <Route path="/404" component={Notfound} />
        <Route component={Notfound} />
      </Switch>
    </div>
    </>
  );
}

export default App;
