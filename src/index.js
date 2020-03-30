import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import ReactDOM from "react-dom";


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Router><App /></Router>, wrapper) : false;
