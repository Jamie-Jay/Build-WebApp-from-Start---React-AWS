// import firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// Import FirebaseAuth and firebase.
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

// import App from '../../App'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNM5NaGrZuIuMNFSMZJQXB2TTW5FdQmaw",
    authDomain: "tri-auth.firebaseapp.com",
    projectId: "tri-auth",
    storageBucket: "tri-auth.appspot.com",
    messagingSenderId: "303709730759",
    appId: "1:303709730759:web:fdef3d4de40b6828538be2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default class SignInScreen extends React.Component {
 
    // The component's Local state.
    state = {
      isSignedIn: false, // Local signed-in state.
      toSignOut: false,
      shouldRender: false
    };
   
    // Configure FirebaseUI.
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      // signInSuccessUrl: '/App',
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: function(authResult) {
          this.setState(
            {user: authResult.user}
          )
          console.log(authResult.user)
          // var credential = authResult.credential;
          // var isNewUser = authResult.additionalUserInfo.isNewUser;
          // var providerId = authResult.additionalUserInfo.providerId;
          // var operationType = authResult.operationType;
          // Do something with the returned AuthResult.
          // Return type determines whether we continue the redirect
          // automatically or whether we leave that to developer to handle.
          return false;
        }
      }
    };
   
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );

      // var userName = this.state.isSignedIn ? firebase.auth().currentUser.displayName: null
      // this.props.updateSignInStatus(this.state.isSignedIn, userName)
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }

    shouldComponentUpdate(){
        return this.state.shouldRender;
    }
   
    render() {
      console.log("this.state.user")
      console.log(this.state.user)

      if (!this.state.isSignedIn) {
        return (
          <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        );
      } 
      {
        return (
          <div>
            <h1>My App</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button> 
          </div>
        );        
      }
    }

    // To allow for further configuration you can access the firebaseUI instance before it is started. 
    // To do this you can pass a uiCallback callback function that wil be passed the Firebase UI instance. 
    // For example here is how to enable the disableAutoSignIn() option:
    // render() {
    //   return (
    //     <div>
    //       <h1>My App</h1>
    //       <p>Please sign-in:</p>
    //       <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    //     </div>
    //   );
    // }
  }