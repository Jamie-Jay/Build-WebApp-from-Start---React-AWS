import React, { Component } from 'react'

import LandingPage from '../Landing';

class Feed extends Component {

  render() {
    if(this.props.content != null) {
      const {id, name, post, time, likes, stars, views} = this.props.content

      return (
        <div className="card m-auto" style={{ margin: '1rem', width: '40rem' }}>
          {/* <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div> */}
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{name.S}</p>
                <p className="subtitle is-6">@{name.S}</p>
              </div>
            </div>
            <div className="content">
              <p>{post.S}</p>
              <br />
              <time>{time.S}</time> 
            </div>
          </div>
          <footer className="card-footer">
          <a href="#" className="card-footer-item">{likes.N} Likes</a>
          <a href="#" className="card-footer-item">{stars.N} Stars</a>
          <a href="#" className="card-footer-item">{views.N} views</a>
        </footer>
        </div>
      )
    } else {
      // no data
      return (
        <div>
          <h2>No data</h2>
          <LandingPage />
        </div>
      )
    }
  }
}

export default Feed
