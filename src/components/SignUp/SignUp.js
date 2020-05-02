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
        email: '',
        password: '',
        confirmPassword: '',
        showModal: this.props.showSignUp, //TODO: find a better way to solve this. mabe use redux
        error: null
    };
  }

  onSubmit = event => {
    const { email, password, confirmPassword } = this.state;

    // TODO: Really??
    // validate passwords
    if(password !== confirmPassword){
      this.setState({error: "Passwords don't match!"}); // TODO: firebase returns error as object, here error used as string, fix this
    }
    else{
      this.props.firebase
        .signUp(email, password)
        .then(authUser => {
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
        .catch(error => {
          this.setState({ error: error });
        });
    }

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { fullName, email, password, confirmPassword, showModal, error } = this.state;
    const onSubmit = this.onSubmit;
    const onChange = this.onChange;
    const handleClose = this.props.handleClose;

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
