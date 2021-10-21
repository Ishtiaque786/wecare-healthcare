import React from "react";
import img from "./img.jpg";
import "./About.css";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <h1 className="text-center mt-5">About Us</h1>
      <Container fluid>
        <Row>
          <div className="col-12 col-md-6 my-auto p-3">
            <h1>WeCare</h1>
            <h5>
              It is one biggest online platform for heathcare in Bangladesh.
            </h5>
            <h5>We do not compromise with the quality.</h5>
            <h5>
              We have given more than 5000+ services through our platform.
            </h5>
            <h5>We do not take fees for financial problem.</h5>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
        </Row>
      </Container>
    </>
  );
};
export default About;
