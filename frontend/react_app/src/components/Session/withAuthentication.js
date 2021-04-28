import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      // Firebase offers a listener function to get the authenticated user from Firebase
      // the passed function is called every time something changes for the authenticated user.
      // If a user signs out, the authUser object becomes null

      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (authUser) {
            authUser.updateProfile({
              // displayName: "Jane Q. User",
              // this.props.firebase.auth().currentUser.displayName
            }).then(function() {
              // Update successful.
            }).catch(function(error) {
              // An error happened.
            });            
          }

          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        },
      );
    }

    // avoid memory leaks that lead to performance issues, so we'll remove the listener if the component unmounts.
    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;