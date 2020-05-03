import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'; 
import {Layout} from './components/Layout';
import { LogIn } from './components/LogIn';
import { withAuthentication, AuthUserContext } from './components/Session';

const App = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        { authUser =>
            authUser 
            ? <Layout />
            :<Redirect to='/login' />
        }
        </AuthUserContext.Consumer> 
        <Switch>
          <Route exact path='/login' component={LogIn} />
          <Route path='' render={() => (<p>Sorry, page not found.</p>)} />
        </Switch>
    </div>
  );
};

export default withAuthentication(App);
