import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import ReactDOM from "react-dom";
import Layout from './components/Layout';

const App = () => {
  return <div>
      <Route path='/' component={Layout} />
      <Route path='' render={() => (<p>Sorry, page not found.</p>)} />
    </div>
};

export default App;
