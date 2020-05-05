import React from 'react';
import { withFirebase } from '../Firebase';

// TODO: figure out how to remove use of let keyword and still use named exports 
let LogOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.logOut}>
    Sign Out
  </button>
);
 
const LogOut = withFirebase(LogOutButton);

export { LogOut };
