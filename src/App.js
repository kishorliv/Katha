import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import LogInPage from './components/LogIn';
import LayoutPage from './components/Layout';
import * as ROUTES from './constants/routes';
import PasswordForgetPage from "./components/PasswordForget";
import { withAuthentication, AuthUserContext } from './components/Session';

const App = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        { authUser =>
            authUser 
            ? <LayoutPage />
            : <Redirect to={ROUTES.LOG_IN} />
        }
        </AuthUserContext.Consumer> 
        <Route exact path={ROUTES.LOG_IN} component={LogInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    </div>
  );
};

export default withAuthentication(App);
