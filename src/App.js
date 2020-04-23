import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import {Layout} from './components/Layout';
import { Login } from './components/Auth';
import {PrivateRoute} from './components/Auth/PrivateRoute';

const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/' component={Layout} />
          <Route path='' render={() => (<p>Sorry, page not found.</p>)} />
        </Switch>
    </div>
  );
};

export default App;
