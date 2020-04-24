import React from 'react';
import Button from 'react-bootstrap/Button';

import './style.css';

const LoginForm = (props) => {
    return (
      <form id="login-form" className="form" onSubmit={props.submit}>
        <h3 className="text-center text-info">Login</h3>
        <div className="form-group">
            <label htmlFor="email" className="text-info">Email:</label><br />
            <input type="text" name="email" value={props.uName} required className="form-control" onChange={props.changed} />
        </div>
        <div className="form-group">
            <label htmlFor="password" className="text-info">Password:</label><br />
            <input type="password" name="password" value={props.pwd} required className="form-control" onChange={props.changed} />
        </div>
        <div className="form-group">
            <label htmlFor="remember" className="text-info">
              <span><input value={props.remember} onChange={props.cbChange} name="remember" type="checkbox" /></span> 
              <span>&nbsp;Remember me</span> 
            </label>
            <br />
            {props.error ? <p class='redColor'> {props.error} </p> : null}
            <br />
            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
        </div>
        <div id="register-link" className="text-right">
            <Button variant='link' onClick={props.handleSignup}>Register here</Button>
        </div>
      </form>
    );
  }

export {LoginForm};