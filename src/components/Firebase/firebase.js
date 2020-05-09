import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB,
    projectId: process.env.REACT_APP_FIREBASE_PRJ_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  };
   
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();  // firebase's auth service
  }

  signUp = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  logIn = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  logOut = () => {
    this.auth.signOut();
  };

  resetPassword = (email) => {
    return this.auth.sendPasswordResetEmail(email);
  };

  verifyEmail = () => {
    return this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT_URL
    })
  };

}
   
export { Firebase };
