import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom'; 
import App from './App';
import { Firebase, FirebaseContext } from './components/Firebase';


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <App />
        </Router>
    </FirebaseContext.Provider>
    , wrapper) : false;
