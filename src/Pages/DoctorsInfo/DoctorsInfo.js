import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const DoctorsInfo = (props) => {
  const { id, name, img, Qualification, experience } = props.doctor;
  return (
    <>
      <div className="my-3">
        <CardGroup className="cards mt-2 mx-auto" style={{ width: "25rem" }}>
          <Card className="col-lg-4 col-md-6 col-6">
            <Card.Body>
              <Card.Img variant="top" src={img} />
              <Card.Title>Name: {name}</Card.Title>
              <Card.Text>Qualification: {Qualification}</Card.Text>
              <Card.Text>Experience: {experience}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={`booking/${id}`}>
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
export default DoctorsInfo;
