import React from 'react';
 
const FirebaseContext = React.createContext(null);
 
// HOC to pass firebase obj
const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );  

export { FirebaseContext, withFirebase };
