import React from 'react';
import { Link } from 'react-router-dom';

const redColor = {
  color: 'red',
}

const LoginForm = (props) => {
  return (
    <form id="login-form" className="form" onSubmit={props.submit}>
      <h3 className="text-center text-info">Login</h3>
      <div className="form-group">
          <label htmlFor="username" className="text-info">Username:</label><br />
          <input type="text" name="username" value={props.uName} required className="form-control" onChange={props.changed} />
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
          {props.error ? <p style={redColor}> {props.error} </p> : null}
          <br />
          <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
      </div>
      <div id="register-link" className="text-right">
          <Link className="text-info" to='/signup'>Register here</Link>
      </div>
    </form>
  );
}


class Login extends React.Component {
  
  state = {
    username: "",
    password: "",
    remember: false,
    err: "",
  }

  componentDidMount () {
    // check if remember me feature was checked and load forms accordingly
    let name = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    if(name && password){
      this.setState({
        username: name,
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
    //api post request
    //if invalid set and display error
    if(this.state.username === 'error'){
      this.setState({err: "Invalid username or password!!"});
    }
    else{
      this.setState({err: ""});
    }
    e.preventDefault();
    console.log(this.state);
    if(this.state.remember){
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('password', this.state.password);
    }
    else{
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }

  render() {
    const {username, password, remember, err} = this.state;
    return (
        <div className="container">
          <div id="login-row" style={{height:'100vh', width:'100%'}} className="row justify-content-center align-items-center">
            <div id="login-box" className="col-md-6 card p-5">
                <LoginForm changed={this.handleChange} uName={username} 
                  pwd={password} remember={remember} cbChange={this.cbChange} submit={this.formSubmit} error={err} />
            </div>
          </div>
        </div>
    );
  }
}

export { Login };