import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// import { FirebaseContext } from '../Firebase';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
    {/* every component that is interested in using Firebase has access to the Firebase instance with a FirebaseContext.Consumer component..4
    make the Firebase instance available in the SignUpForm
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>*/}
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  // an error state to capture an error object in case of the sign up request to the Firebase API fails.
  // The error objects from Firebase have this message property by default, so you can rely on it to display the proper text for your application's user. However, the message is only shown when there is an actual error using a conditional rendering.
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    // pass all the form data to the Firebase authentication API via your authentication interface in the Firebase class
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      // If the request resolves successfully, you can set the local state of the component to its initial state to empty the input fields.
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        // redirect the user to another page
        this.props.history.push(ROUTES.HOME);
      })
      // If the request is rejected, you will run into the catch block and set the error object in the local state. An error message should show up in the form due to the conditional rendering in your component's render method.
      .catch(error => {
        this.setState({ error });
      });

    // the preventDefault() method on the event prevents a reload of the browser which otherwise would be a natural behavior when using a submit in a form.
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    // enable or disable the submit button.
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit} className="w-50 m-auto">
        <div className="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input className="form-control"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
            <input className="form-control"
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="Enter Email Address"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input className="form-control"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input className="form-control"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isInvalid} >Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p className="w-50 m-auto">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

// Any component that goes in the withRouter() higher-order component gains access to all the properties of the router
// The relevant property from the router props is the history object, because it allows us to redirect a user to another page by pushing a route to it.
const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink};