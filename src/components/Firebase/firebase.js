import app from 'firebase/app';
import 'firebase/auth';

const devConfig = {
    apiKey: process.env.REACT_APP_DEV_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_DEV_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_FIREBASE_DB,
    projectId: process.env.REACT_APP_DEV_FIREBASE_PRJ_ID,
    storageBucket: process.env.REACT_APP_DEV_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_FIREBASE_SENDER_ID,
  };
   
const prodConfig = {
    apiKey: process.env.REACT_APP_PROD_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_PROD_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_FIREBASE_DB,
    projectId: process.env.REACT_APP_PROD_FIREBASE_PRJ_ID,
    storageBucket: process.env.REACT_APP_PROD_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_FIREBASE_SENDER_ID,
  };
  
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();  // firebase's auth service
  }

  signUp = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logIn = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logOut = () => {
    this.auth.signOut();
  };
}
   
export { Firebase };
