import React from 'react';

import './style.css';


const LoginForm = ({ email, password, error, onChange, onSubmit}) => {
    return (
      <div>
        <h3 className="text-center text-info">Login</h3>
        <div className="form-group">
            <label htmlFor="email" className="text-info">Email:</label><br />
            <input type="text" name="email" value={email} className="form-control" onChange={onChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="password" className="text-info">Password:</label><br />
            <input type="password" name="password" value={password} className="form-control" onChange={onChange} required />
        </div>
        <div className="form-group">
            {error ? <p> {error.message} </p> : null}
            <br />
            <input type="submit" name="submit" className="btn btn-info btn-md" value="Login" onClick={onSubmit} />
        </div>
      </div>
    );
  }

export { LoginForm };
