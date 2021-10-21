import React from "react";
import { Carousel } from "react-bootstrap";
import HomeDoctors from "./HomeDoctors/HomeDoctors";
import Services from "../Services/Services";
import About from "../About/About";
import Appointment from "../Appointment/Appointment";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <Carousel id="home">
          <Carousel.Item>
            <img className=" w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3> We treat with with care </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3> We have best doctors </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3> World class facility under one roof </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <Services></Services>
        </div>
        <div>
          <HomeDoctors></HomeDoctors>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Appointment></Appointment>
        </div>
      </div>
    </>
  );
};
export default Home;
