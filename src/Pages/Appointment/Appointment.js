import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Book Your Appointment</h1>
      <Container fluid>
        <Row>
          <div className="col-12 col-md-6">
            <div className="py-2">
              <h4>Fill up the form:</h4>
              <br />
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="name@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Additional notes:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Link to="/appointment">
                  <Button variant="outline-success" type="submit">
                    Submit
                  </Button>
                </Link>
              </Form>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <img
              className="img-fluid my-5"
              src="https://image.freepik.com/free-vector/woman-booking-appointment-calendar_23-2148562875.jpg"
              alt=""
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
