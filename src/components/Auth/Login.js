import React from 'react';
import 'firebase/auth';
import axios from 'axios';

import {LoginForm} from './LoginForm';
import { getToken } from './PrivateRoute';
import fireAuth from '../../utils/firebase';
import {SignupModal} from './SignupModal';

import {apiEndpoint} from '../../utils/utils';


class Login extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false,
    err: "",
    signupModal: false,
    fName: "",
    lName: "",
    signupEmail: "",
    signupPassword: "",
    signupConfirmPassword: "",
    signupErr: "",
  }

  componentDidMount () {
    //if already logged in, redirect
    if(getToken()){
      this.props.history.push('/');
    }


    // check if remember me feature was checked and load forms accordingly
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    if(email && password){
      this.setState({
        email,
        password: password
      })
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  cbChange = (e) => {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }

  formSubmit = (e) => {
    e.preventDefault();
    //api post request
    // fireAuth.signOut();
    fireAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res =>{
        console.log(res);
        this.setState({err: ""});
        setTimeout(()=>{this.props.history.push('/');}, 500);
        
      })
      .catch(err => {
        this.setState({err: "Invalid email or password!!"});
      })
    
    
    console.log(this.state);
    //remember me feature
    if(this.state.remember){
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password);
    }
    else{
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  }

  handleSignupShow = () => {
    this.setState({signupModal: true});
  }

  checkSignupError() {
    let error = false;
    if(this.state.signupConfirmPassword !== this.state.signupPassword){
      this.setState({signupErr: "Passwords don't match!!"});
      error = true;
    }

    const reg = new RegExp('^[a-zA-Z].*[\s\.]*$');
    const testStr = this.state.fName + " " + this.state.lName;
    if(!reg.test(testStr)){
      this.setState({signupErr: "Invalid First name or Last name"});
      error = true;
    }
    return error;
  }

  signupSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    //check if there are form errors
    // if(!this.checkSignupError()){
      if(!0){
      this.setState({signupErr: ""});
      const reqObj = {
        fullName: this.state.fName + " " + this.state.lName,
        email: this.state.signupEmail,
        authId: "12321",
      };
      console.log(reqObj);
      fireAuth.createUserWithEmailAndPassword(this.state.signupEmail, this.state.signupPassword)
      .then(res =>{
        console.log(res);
        //create the user in mongo db as well
        axios
          .post(
            apiEndpoint+'/users/create',
            reqObj,
          )
          .then(()=>{
            this.setState({
              signupErr: "", 
              signupModal: false,
            });
            setTimeout(()=>{this.props.history.push('/');}, 500);
          })
          .catch(err => {
            console.log(err);
            this.setState({signupErr: err.message});
            //could not create that user. so delete it from from firebase as well
            const user = fireAuth.currentUser;
            user.delete().then(() => {
              console.log("user deleted from firebase");
              localStorage.removeItem('user');
            }).catch(err => {
              console.log(err);
            })
          });
      })
      .catch(err => {
        this.setState({signupErr: err.message});
      })
    }    

  }

  render() {
    const {
      email, password, remember, err, 
      signupErr, signupModal, fName, lName, signupEmail, signupPassword, signupConfirmPassword
    } = this.state;
    return (
        <div className="container">
          <div id="login-row" style={{height:'100vh', width:'100%'}} className="row justify-content-center align-items-center">
            <div id="login-box" className="col-md-6 card p-5">
                <LoginForm changed={this.handleChange} uName={email} handleSignup={this.handleSignupShow}
                  pwd={password} remember={remember} cbChange={this.cbChange} submit={this.formSubmit} error={err} />
                
                <SignupModal fName={fName} lName={lName} signupEmail={signupEmail} signupPass={signupPassword}
                  signupConfirmPass={signupConfirmPassword} signupSubmit={this.signupSubmit} changed={this.handleChange} 
                  show={signupModal} err={signupErr} handleClose={()=>this.setState({signupModal:false})} />

            </div>
          </div>
        </div>
    );
  }
}

export { Login };