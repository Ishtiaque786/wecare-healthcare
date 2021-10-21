import React, { useEffect, useState } from "react";
import ServicesInfo from "../ServicesInfo/ServicesInfo";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div>
        <h2>
          {" "}
          <span className="tag">Our Services and facility</span>
        </h2>
        <h4>
          We have best services here to treat you. WeCare cares for your health
          condition.
        </h4>
        {services.map((service) => (
          <ServicesInfo key={service.key} service={service}></ServicesInfo>
        ))}
      </div>
    </>
  );
};
export default Services;
