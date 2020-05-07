import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'; 
import {Layout} from './components/Layout';
import { LogIn } from './components/LogIn';
import { withAuthentication, AuthUserContext } from './components/Session';
import { PasswordForgetPage } from "./components/PasswordForget";

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
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/pwd-forget' component={PasswordForgetPage} />
    </div>
  );
};

export default withAuthentication(App);
