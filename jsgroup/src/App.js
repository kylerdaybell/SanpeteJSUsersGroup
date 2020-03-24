import React from 'react';
import { Route, Switch } from "react-router";
import Homepage from './components/home';

const App = () => {
  return (
    <>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/404" component={NotFound} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
    </>
  );
}

export default App;
