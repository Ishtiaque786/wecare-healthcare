import React, { useEffect, useState } from "react";
import DoctorsInfo from "../DoctorsInfo/DoctorsInfo";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <>
      <div>
        <h2>
          {" "}
          <span className="tag">Our Doctors</span>
        </h2>
        <h4>We have best doctors here for you 24/7.</h4>
        {doctors.map((doctor) => (
          <DoctorsInfo key={doctor.key} doctor={doctor}></DoctorsInfo>
        ))}
      </div>
    </>
  );
};
export default Doctors;
