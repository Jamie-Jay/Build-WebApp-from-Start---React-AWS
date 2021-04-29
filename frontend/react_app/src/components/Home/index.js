import React, { Component }  from 'react';
import Feed from '../Feed'

import { AuthUserContext } from '../Session';

class Home extends Component {
  render () {
    return (
      <div>
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <HomeAnth user={authUser}/> : <HomeNoAnth />
          }
        </AuthUserContext.Consumer>
      </div>
    )
  }
}

class HomeAnth extends React.Component {

  state = {
    contents: null
  }

  async componentDidMount() {

    const idToken = await this.props.user.getIdToken()
    // const bankendUrl = 'http://localhost:4000/dev/getposts/test';
    const bankendUrl = 'https://olbincrtnj.execute-api.us-east-1.amazonaws.com/dev/getposts/test';

    const response = await fetch(bankendUrl, {
      headers: {
        'Authorization': idToken
      }
    })
    if (response.status === 401) {
      return console.log('unauthorized')
    }

    const contents = await response.json()
    // save it to your components state so you can use it during render
    this.setState({contents: contents})
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
        {
          this.state.contents && this.state.contents.map(feedcontent => {
            return (
              <li>
                <Feed content={feedcontent} />
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

class HomeNoAnth extends Component {
  render () {
    return (
      <div>No content</div>
    )
  }
}

// the home page is a protected route, which users can only access if they have been authenticated.
export default Home;
