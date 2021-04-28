import React, { Component } from 'react'

// import './App.css';
import Feed from './components/Feed';
import NaviBar from './components/NaviBar';
import SignInScreen from './components/SignInScreen'

export default class App extends Component {
  
  state = {
    isSignedIn: false,
    userName: null
  }

  updateSignInStatus = (isSignedIn, userName) => {
    this.setState({
      isSignedIn,
      userName
    })
  }

  render (){
    console.log(this.state.isSignedIn)
    if (this.state.isSignedIn === false) {
      return (
        <SignInScreen updateSignInStatus={this.updateSignInStatus}/>
      )
    } else {
      // personal main page
      return (
        <div>
          <header>
            <NaviBar userName={this.props.userName}/>
          </header>

          <Feed/>
          <Feed/>
        </div>       
      ); 
    } 
  }
}
