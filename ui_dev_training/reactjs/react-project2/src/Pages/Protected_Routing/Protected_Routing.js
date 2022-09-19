import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect, withRouter } from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false, 
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 1000);
  }, 
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 1000);
  }
}

const Public = () => <h4>Public</h4>
const Protected = () => <h4>Protected</h4>

class Protected_Routing extends Component {
  state = {
    redirectToReferrer: false
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer === true) {
      return <Redirect to = {from} />
    }

    login = () => {
      fakeAuth.authenticate(() => (
        this.setState(() => ({
          redirectToReferrer: true
        }))
      ))
    }

    return(
      <div className="row">
        <div className="col-12">
          <h4>you must log in - to view page</h4>
          <button type="button" className="btn btn-info me-2" onClick={this.login}> Login </button>
        </div>
      </div>
    )
  }
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: { from: props.location}}} />
  )} />
);

const AuthButton = withRouter(({history}) => (
  fakeAuth.authenticate ? 
  (<h4>Welcome <button type="button" className="btn btn-info me-2" onClick={() => {
    fakeAuth.signout(() => history.push('/'))
  }}>Signout</button></h4>) : (<h4>You are not logged in!</h4>)
));


export default function AuthExample() {
  return(
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li><Link to="/public"> Public Page </Link></li>
          <li><Link to="/protected"> Protected Page </Link></li>
        </ul>

        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  )
}