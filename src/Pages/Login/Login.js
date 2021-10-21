import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const {
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleResetPassword,
  } = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="text-center my-4">
      <h1>Login</h1>
      <Container>
        <Row>
          <Col md className="my-auto">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Log In
              </Button>
              <Button
                className="mx-2"
                onClick={handleResetPassword}
                variant="danger"
              >
                Reset Password
              </Button>
              <br />
              <p className="my-2">
                New user? <Link to="/register">Create an account</Link>{" "}
              </p>
              <Button onClick={handleGoogleLogin} variant="secondary">
                Google SignIn
              </Button>
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
  );
};

export default Login;
