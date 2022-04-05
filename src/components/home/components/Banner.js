import React from "react";

import { Carousel, Col, Container, Row } from "react-bootstrap";

import Logo from "../../../assets/images/placeholder.png";

const Banner = () => {
  return (
    <Container fluid className="craousel-container-wrapper">
      <Row>
        <Col lg={8} sm={12}>
          <Carousel variant="dark" className="mt-5 mb-5">
            <Carousel.Item>
              <img className="w-100 craousel-image-content" src={Logo} alt="First slide" />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 craousel-image-content" src={Logo} alt="Second slide" />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 craousel-image-content" src={Logo} alt="Third slide" />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={4} sm={12}>
          <Carousel variant="dark" className="mt-5 mb-5">
            <Carousel.Item>
              <img className="w-100 craousel-image-content" src={Logo} alt="First slide" />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 craousel-image-content" src={Logo} alt="Second slide" />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 craousel-image-content" src={Logo} alt="Third slide" />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
