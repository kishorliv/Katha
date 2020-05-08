import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
 

const PasswordForgetPage = () => (
  <div>
    <h1>Reset your password</h1>
    <PasswordForget />
  </div>
);
 
 
class PasswordForgetBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        email: '',
        sent: false,
        error: null
    };
  }
 
  onSubmit = event => {
    const { email } = this.state;
 
    this.props.firebase
      .resetPassword(email)
      .then(() => {
        this.setState({
            email: '',
            sent: true,
            error: null    
        });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, sent, error } = this.state;
  
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          required
        />
        <button type="submit">
          Reset password
        </button>

        {sent && <p>Email sent! Please check your email for further password reset instructions.</p>}
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
  
const PasswordForget = withFirebase(PasswordForgetBase);
 
export default PasswordForgetPage;
export { PasswordForget, PasswordForgetLink };
