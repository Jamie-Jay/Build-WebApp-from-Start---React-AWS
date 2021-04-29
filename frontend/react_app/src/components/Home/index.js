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
    contents: null,
    newpost: ''
  }

  async componentDidMount() {
    this.fetchPosts()
  }
  
  async fetchPosts() {
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

  async creatNewPost() {
    // compose put request
		const token = await this.props.user.getIdToken()

    const bankendUrl = 'https://olbincrtnj.execute-api.us-east-1.amazonaws.com/dev/getposts';
		// Make a POST request to your new API
    try {
      const response = await fetch(bankendUrl, {
        method: 'POST',
        headers: {
          'Authorization': token
        },
  
        // Include the data you want to save in the body of the request
        // as a JSON string
        body: JSON.stringify({
          UserId: this.props.user.displayName,
          id: this.props.user.displayName,
          name: this.props.user.displayName,
          post: this.state.newpost,
          likes: 0,
          stars: 0,
          views: 0
        })
      });

      if (response.status === 401) {
        return alert('unauthorized')
      }

      alert(response.body)

      // After the request is made, get all the posts again
      // which will now include the newest one
      this.fetchPosts()
    } catch (error) {
      alert(error)  
    }
  };

  onChange = event => {
    this.setState({ newpost: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
        {
          this.state.contents && this.state.contents.map(feedcontent => {
            return (
              <li key={feedcontent.UserId.S}>
                <Feed content={feedcontent} />
              </li>
            )
          })
        }
        </ul>

        <br />
        <form className="w-50 m-auto">
        <label >New Post</label>
        <input class="input" type="text" onChange={this.onChange} value={this.state.newpost}></input>
        <button type="submit" onClick={(event) => this.creatNewPost(event)} className="btn btn-primary" disabled={this.state.newpost.length<1} >Submit</button>
        </form>
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
