import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function getToken(){
    const user = localStorage.getItem('user');
    if(user){
        //todo:: if backend has this user info, return true else return false
        try{
          const res = JSON.parse(user);
          const key = ['apiKey', 'uid'];
          const hayStack = Object.keys(res);
          key.forEach(e => {
            if(!hayStack.includes(e)){
              return false;
            }
          });
          return true;
        }
        catch{
          return false;
        }
    }
    else{
        return false;
    }
}

//auth comes from global state... authReducer.js
//this is functional React component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


export { PrivateRoute, getToken };
