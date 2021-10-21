import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeDoctors = () => {
  return (
    <div className="text-center my-4">
      <h1>Our Doctors</h1>
      <Container>
        <Row>
          <Col md className="my-auto">
            <h3>We have the best quality doctors in our service.</h3>
            <h3>Our doctors are well qualified.</h3>
            <h3>Your health is our first concern.</h3>
            <Link to="/doctors">
              <Button className="my-3" variant="outline-success" type="submit">
                View our Doctors
              </Button>
            </Link>
          </Col>
          <Col md>
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-photo/happy-team-successful-doctors-standing-together-hospital-gowns_186202-1737.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeDoctors;
