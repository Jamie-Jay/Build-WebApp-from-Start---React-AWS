import React from 'react';

const FirebaseContext = React.createContext(null);
// use React's Context API to provide a Firebase instance once at the top-level of your component hierarchy.
// The createContext() function essentially creates two components.
// The FirebaseContext.Provider component is used to provide a Firebase instance once at the top-level of your React component tree
// FirebaseContext.Consumer component is used to retrieve the Firebase instance if it is needed in the React component.

// use a higher-order component to improvement on how we access the Firebase instance
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;