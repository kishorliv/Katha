import * as firebase from 'firebase';

const firebaseObj = firebase.initializeApp({
    apiKey: "AIzaSyCYr1O1Jwwbe4MrCkWdCqC5rEMlx3JF2VQ",
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB,
    projectId: process.env.REACT_APP_FIREBASE_PRJ_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})
const fireAuth = firebaseObj.auth();

fireAuth.onAuthStateChanged(fbUser => {
    if(fbUser){
        //logged in 
        console.log("logged in ");
        localStorage.setItem('user', JSON.stringify(fbUser));
    }
    else{
        //logged out
        console.log("logged out");
        localStorage.removeItem('user');
    }
})

export default fireAuth;