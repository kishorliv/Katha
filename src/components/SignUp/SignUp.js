import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { SignUpModal } from './SignUpModal';

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

  onSubmit = event => {
    const { email, signupPass, signupConfirmPass } = this.state;

    // validate passwords
    if(signUpPass !== signupConfirmPass){
      this.setState({error: "Passwords don't match!"}); // TODO: firebase returns error as object, here error used as string, fix this
    }
    else{
      this.props.firebase
        .signUp(email, signupPass)
        .then(authUser => {
          this.setState({
              fullName: '',
              signUpEmail: '',
              signupPass: '',
              signupConfirmPass: '',
              showModal: true,
              error: null
          });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          this.setState({ error });
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
