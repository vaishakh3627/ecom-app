import React from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Image from "../../../assets/images/card.png";

const ProductCard = () => {
  return (
    <Container fluid>
      <Row className="product-row-content-wrapper">
        <Col
          lg={2}
          sm={12}
          md={4}
          className="mt-2 product-column-content-wrapper"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={2}
          sm={12}
          md={4}
          className="mt-2 product-column-content-wrapper"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={2}
          sm={12}
          md={4}
          className="mt-2 product-column-content-wrapper"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={2}
          sm={12}
          md={4}
          className="mt-2 product-column-content-wrapper"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={2}
          sm={12}
          md={4}
          className="mt-2 product-column-content-wrapper"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductCard;
