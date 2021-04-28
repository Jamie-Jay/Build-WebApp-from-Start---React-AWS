import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth user={authUser} /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

// Link: even though the URL changes, the displayed content doesn't change. The navigation is only there to enable navigation through your application
class NavigationAuth extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Tri-O</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={ROUTES.FRIENDS}>Friends</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={ROUTES.NOTIFICATIONS}>Notifications</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.props.user.displayName ? this.props.user.displayName : this.props.user.email}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={ROUTES.LANDING}>Landing Page</Link>
                <Link className="dropdown-item" to={ROUTES.HOME}>Home</Link>
                <Link className="dropdown-item" to={
                  {
                    pathname: ROUTES.ACCOUNT,
                    state:{
                      username: this.props.user.displayName,
                      useremail: this.props.user.email
                    }
                  }
                }>Account</Link>
                <Link className="dropdown-item" to={ROUTES.ADMIN}>Admin</Link>
                <div className="dropdown-divider"></div>
                <Link to={ROUTES.LANDING}><SignOutButton /></Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Tri-O</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.LANDING}>Landing Page</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Friends</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Notifications</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={ROUTES.LANDING}>Landing Page</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to={ROUTES.SIGN_IN}>Sign In</Link>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Navigation;
