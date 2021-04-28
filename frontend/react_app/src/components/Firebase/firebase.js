import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNM5NaGrZuIuMNFSMZJQXB2TTW5FdQmaw",
  authDomain: "tri-auth.firebaseapp.com",
  projectId: "tri-auth",
  storageBucket: "tri-auth.appspot.com",
  messagingSenderId: "303709730759",
  appId: "1:303709730759:web:fdef3d4de40b6828538be2"
};

class Firebase {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Import and instantiate the package from Firebase responsible for all the authentication
    this.auth = firebase.auth();
  }

  // *** Auth API ***
  // the sign up function (registration) takes email and password parameters for its function signature and uses an official Firebase API endpoint to create a user
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
