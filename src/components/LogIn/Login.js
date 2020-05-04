import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUp } from '../SignUp';
import { LoginForm } from './LoginForm';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Button from 'react-bootstrap/Button';

class LogInBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        error: null,
        showSignUp: false,
    };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .logIn(email, password)
      .then(() => {
        this.setState({
            email: '',
            password: '',
            error: null,
            showSignUp: false,
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ 
          error: error,
          password: '' 
        });
      });

    event.preventDefault();
  };

  onChange = event => {
    console.log(process.env);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUpClick = () => {
    this.setState({ showSignUp: true });
  };

  handleClose = event => {
    this.setState({ showSignUp: false });
  };

  render() {
    const { email, password, error, showSignUp } = this.state;
    const onSubmit = this.onSubmit;
    const onChange = this.onChange;
    const handleSignUpClick = this.handleSignUpClick;
    const handleClose = this.handleClose;

    return (
      <div className="container">
          <div id="login-row" style={{height:'100vh', width:'100%'}} className="row justify-content-center align-items-center">
            <div id="login-box" className="col-md-6 card p-5">
                <LoginForm 
                    email={email} 
                    password={password} 
                    error={error} 
                    onChange={onChange}
                    onSubmit={onSubmit} 
                />
                <SignUpLink handleSignUpClick={handleSignUpClick} />
                {showSignUp ? <SignUp showSignUp={showSignUp} handleClose={handleClose} /> : null}
            </div>
          </div>
        </div>      
    );
  }
}

const SignUpLink = ({ handleSignUpClick }) => {
return(
  <div>
    <Button variant='link' onClick={handleSignUpClick}>Don't have an account? Sign up!</Button>
  </div>  
);    
};

const LogIn = withRouter(withFirebase(LogInBase));

export { LogIn };
