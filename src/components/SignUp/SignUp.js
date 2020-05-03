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
        signUpEmail: '',
        signUpPass: '',
        signUpConfirmPass: '',
        showModal: true,
        error: null
    };
  }

  createUser = (authUser) => {
    console.log(authUser);
    const reqObj = {
        fullName: this.state.fullName,
        email: this.state.signUpEmail,
        authId: authUser.user.uid,
    };
    console.log(reqObj);
    axios
      .post(
        apiEndpoint+'/users/create',
        reqObj,
      )
      .then(() => {
        console.log("POSTED");
        this.setState({
          fullName: '',
          signUpEmail: '',
          signUpPass: '',
          signUpConfirmPass: '',
          showModal: true,
          error: null
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(err => {
        console.log("WHAT HAPPENED??");
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
    const { signUpEmail, signUpPass, signUpConfirmPass } = this.state;

    // validate passwords
    if(signUpPass !== signUpConfirmPass){
      this.setState({error: "Passwords don't match!"}); // TODO: firebase returns error as object, here error used as string, fix this
    }
    else{
      console.log(signUpEmail);
      this.props.firebase
        .signUp(signUpEmail, signUpPass)
        .then(authUser => {
          //create this user in backend as well
          this.createUser(authUser);
        })
        .catch(error => {
          this.setState({ error: error.message });

        });
    }
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = event => {
    this.setState({ showModal: false });
  };

  render() {
    const { fullName, signUpEmail, signUpPass, signUpConfirmPass, showModal, error } = this.state;
    const onSubmit = this.onSubmit;
    const onChange = this.onChange;
    const handleClose = this.handleClose;

    return (
        <SignUpModal 
            fullName={fullName} 
            signUpEmail={signUpEmail} 
            signUpPass={signUpPass}
            signUpConfirmPass={signUpConfirmPass} 
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
