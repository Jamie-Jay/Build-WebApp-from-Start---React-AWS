import React, { Component } from 'react'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  Card, ListGroup, ListGroupItem
} from 'react-bootstrap'

import pic_1 from "../../imgs/maledives.jpg"
import pic_2 from "../../imgs/2.jpg"
import pic_3 from "../../imgs/3.jpg"

export default class Feed extends Component {
    render() {
        return (
            <div  style={{margin: '1rem'}}>
                <Card style={{ width: '50rem' }} className="m-auto">
                    <Carousel className="w-100 m-auto">
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={pic_1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={pic_2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pic_3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    <Card.Body className="w-100">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
 
            </div>
        )
    }
}
