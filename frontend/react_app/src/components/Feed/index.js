import React, { Component } from 'react'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import pic_1 from "../../imgs/maledives.jpg"
import pic_2 from "../../imgs/2.jpg"
import pic_3 from "../../imgs/3.jpg"

class Feed extends Component {

  render() {
    if(this.props.contents != null) {
      const {id, name, post, time, likes, stars, views} = this.props.contents.content

      return (
        <div class="card m-auto" style={{ margin: '1rem', width: '40rem' }}>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{name}</p>
                <p class="subtitle is-6">@{name}</p>
              </div>
            </div>
            <div class="content">
              <p>{post}</p>
              <br />
              <time datetime="2021-4-3">{time}</time> 
            </div>
          </div>
          <footer class="card-footer">
          <a href="#" class="card-footer-item">{likes} Likes</a>
          <a href="#" class="card-footer-item">{stars} Stars</a>
          <a href="#" class="card-footer-item">{views} views</a>
        </footer>
        </div>
      )
    } else {
      // no data
      return (
          <div className="card m-auto" style={{ margin: '1rem', width: '50rem' }}>
            <h2>No content,show default page</h2>
            {/* <img className="card-img-top" src={pic_2} alt="Card image cap" /> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={pic_1} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={pic_2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={pic_3} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
      )
    }
  }
}

export default Feed
