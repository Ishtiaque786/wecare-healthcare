import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    handleRegister,
    error,
  } = useFirebase();
  return (
    <div>
      <div className="text-center my-3">
        <h1>Register - Create an account</h1>
        <Container>
          <Row>
            <Col md className="my-auto">
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={handleNameChange}
                    type="text"
                    placeholder="enter name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={handleEmailChange}
                    type="email"
                    placeholder="enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onBlur={handlePasswordChange}
                    type="password"
                    placeholder="password"
                  />
                </Form.Group>
                <div className="text-danger mb-3">{error}</div>
                <Button variant="success" type="submit">
                  Register
                </Button>
                <p className="my-2">
                  Already have an account? <Link to="/login">Log In</Link>{" "}
                </p>
                <Button variant="secondary">Google SignIn</Button>
              </Form>
            </Col>
            <Col md>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-pass-phrase-pin-verification_335657-3373.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
