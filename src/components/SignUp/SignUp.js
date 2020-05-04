import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {apiEndpoint} from '../../constants/urls';
import { SignUpModal } from './SignUpModal';
import axios from 'axios';

class SignUpBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showModal: this.props.showSignUp, //TODO: find a better way to solve this. mabe use redux
        error: null
    };
  }

  // create user in backend
  createUser = (authUser) => {
    const reqObj = {
        fullName: this.state.fullName,
        email: this.state.email,
        authId: authUser.user.uid,
    };
    axios
      .post(
        apiEndpoint+'/users/create',
        reqObj,
      )
      .then(() => {
        console.log("POSTED");
        this.setState({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
          showModal: true,
          error: null
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(err => {
        console.log("Could not create user in backend.");
        console.log(err);
        this.setState({error: err.message});
        //could not create that user. so delete it from from firebase as well
        authUser.user.delete().then(() => {
          console.log("user deleted from firebase");
        }).catch(err => {
          this.setState({error: err.message});
        })
      });
    }


  onSubmit = event => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;

    // TODO: Really??
    // validate passwords
    if(password !== confirmPassword){
      this.setState({error: "Passwords don't match!"}); // TODO: firebase returns error as object, here error used as string, fix this
    }
    else{
      console.log(email);
      this.props.firebase
        .signUp(email, password)
        .then(authUser => {
          //create this user in backend as well
          this.createUser(authUser);
          this.setState({ showModal: false});
        })
        .catch(error => {
          this.setState({ 
            error: error.message,
            password: '',
            confirmPassword: '' 
          });
        });
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { fullName, email, password, confirmPassword, showModal, error } = this.state;
    const onSubmit = this.onSubmit;
    const onChange = this.onChange;
    const handleClose = this.props.handleClose;
    console.log(error);
    return (
        <SignUpModal 
            fullName={fullName} 
            email={email} 
            password={password}
            confirmPassword={confirmPassword} 
            showModal={showModal} 
            error={error} 
            onSubmit={onSubmit} 
            onChange={onChange} 
            handleClose={handleClose} 
        />
    );
  }
}

const SignUp = withRouter(withFirebase(SignUpBase));

export { SignUp };
