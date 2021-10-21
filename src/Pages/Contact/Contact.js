import React from "react";
import { Accordion } from "react-bootstrap";

const About = () => {
  return (
    <>
      <h2 className="my-3">Our branches</h2>
      <div className="my-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3> Dhaka Branch(Head Office)</h3>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <i class="fas fa-map-marker-alt"></i> Edgbaston road, House no:
                000, Banasree, Dhaka.
              </h4>
              <h4>
                <i class="fas fa-envelope"></i> weCareDhaka@gmail.com
              </h4>
              <h4>
                <i class="fas fa-phone-square-alt"></i> 04834838483488
              </h4>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3> Barishal Branch</h3>
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <i class="fas fa-map-marker-alt"></i> Manchester road, House no:
                000, Kashipur, Barishal.
              </h4>
              <h4>
                <i class="fas fa-envelope"></i> weCareBarishal@gmail.com
              </h4>
              <h4>
                <i class="fas fa-phone-square-alt"></i> 05434838483488
              </h4>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3> Rajshahi Branch</h3>
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <i class="fas fa-map-marker-alt"></i> Santiagu road, House no:
                000, Bibir pukur, Rajshahi.
              </h4>
              <h4>
                <i class="fas fa-envelope"></i> weCareRajshahi@gmail.com
              </h4>
              <h4>
                <i class="fas fa-phone-square-alt"></i> 09834838483488
              </h4>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3> Chattogram Branch</h3>
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <i class="fas fa-map-marker-alt"></i> Allianz road, House no:
                000, Zinzira, Chattogram.
              </h4>
              <h4>
                <i class="fas fa-envelope"></i> weCaresChattogram@gmail.com
              </h4>
              <h4>
                <i class="fas fa-phone-square-alt"></i> 07634838483488
              </h4>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
export default About;
