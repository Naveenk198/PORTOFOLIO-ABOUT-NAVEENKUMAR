import React from "react";
import bookingimg from "../assets/booking.webp";
import "../index.css";
import Productsimg from "../assets/Products.jpg";
const Projects = () => {
  return (
    <div>
      <h1
        style={{
          marginLeft: "140px",
          fontFamily: "initial",
          fontSize: "40px",
        }}
      >
        Projects
      </h1>
      <div className="projects">
        <div style={{ marginLeft: "60px" }}>
          <h3 style={{ marginBottom: "30px", fontFamily: "initial" }}>
            TREKMATE(Drivers Booking System) Full Stack Web Application
          </h3>
          <p
            style={{
              width: "500px",
              textWrap: "wrap",
              fontSize: "20px",
              fontFamily: "initial",
              paddingLeft: "40px",
            }}
          >
            • Developed a full-stack web app for booking and managing drivers
            using Spring Boot and React.js <br />• Implemented login for drivers
            and customers with MySQL as database <br />• Tools Used: Java,
            Spring Boot, React.js, MySQL, REST APIs
          </p>
        </div>
        <img
          src={bookingimg}
          alt=""
          style={{
            width: "47vw",
            height: "50vh",
            marginRight: "30px",
          }}
        />
      </div>
      <div className="projects">
        <div style={{ marginLeft: "60px", fontSize: "20px" }}>
          <h3 style={{ marginBottom: "30px", fontFamily: "initial" }}>
            E-Commerce Web Application Frontend + LocalStorage (products)
          </h3>
          <p
            style={{
              width: "500px",
              textWrap: "wrap",
              fontFamily: "initial",
              paddingLeft: "20px",
            }}
          >
            • Built a responsive online shopping platform using HTML, CSS,
            JavaScript, and React.js. <br />
            • Implemented product listing and cart management.
            <br />
            • Used browser LocalStorage to simulate cart and user data
            persistence.
            <br />• Tools Used: HTML, CSS, JavaScript, React.js, LocalStorage
          </p>
        </div>
        <img
          src={Productsimg}
          alt=""
          style={{
            width: "47vw",
            height: "50vh",
            marginRight: "30px",
          }}
        />
      </div>
    </div>
  );
};
export default Projects;
