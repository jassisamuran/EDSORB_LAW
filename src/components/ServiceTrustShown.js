import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ServiceTrustShown = () => {
  return (
    <Container
      className="fixed-size-container"
      style={{ marginBottom: "50px" }}
    >
      <Carousel style={{ height: "70vh" }}>
        <Carousel.Item>
          {/* Content for the first slide */}
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/400" // Replace with your image URL
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* Content for the second slide */}
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/401" // Replace with your image URL
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </Container>
  );
};

export default ServiceTrustShown;
