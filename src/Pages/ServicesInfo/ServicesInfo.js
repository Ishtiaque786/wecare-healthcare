import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServicesInfo.css";

const ServicesInfo = (props) => {
  const { id, name, img, cost, info } = props.service;
  return (
    <>
      <div className="my-3 service-container md-col-6">
        <CardGroup className="cards mt-2 mx-auto" style={{ width: "25rem" }}>
          <Card className="col-lg-4 col-md-6 col-6">
            <Card.Body>
              <Card.Img variant="top" src={img} />
              <Card.Title>{name}</Card.Title>
              <Card.Text>{info}</Card.Text>
              <Card.Title>Cost:$ {cost}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Link to={`service/${id}`}>
                <Button variant="info" size="lg">
                  Book Appointment
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default ServicesInfo;
