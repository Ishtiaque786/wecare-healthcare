import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center my-4">
        <img
          className="img-fluid"
          src="https://image.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg"
          alt=""
        />
        <div>
          <Link to="/home">
            <Button variant="secondary">Go To Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
