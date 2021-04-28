import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './components/App';
// The Firebase Context from the Firebase module (folder) is used to provide a Firebase instance to your entire application
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  // Firebase is only instantiated once and that it is injected via React's Context API to React's component tree.
  // create the Firebase instance with the Firebase class and pass it as value prop to the React's Context
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
