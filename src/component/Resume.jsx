import React from "react";
import { useNavigate } from "react-router-dom";
import Proimg from "../assets/Pro.jpg";
import "../index.css";
import bookingimg from "../assets/booking.webp";
import Productsimg from "../assets/Products.jpg";

const Resume = () => {
  return (
    <div className="aboutme">
      <h1
        style={{
          marginLeft: "160px",
          fontSize: "40px",
          fontFamily: "initial",
          marginTop: "30px",
        }}
      >
        Resume
      </h1>
      <hr />
      <div style={{ marginTop: "80px" }}>
        <div className="experience" style={{ marginTop: "30px" }}>
          <div>
            <h3
              style={{
                marginLeft: "30px",
                fontSize: "30px",
                fontFamily: "initial",
              }}
            >
              EDUCATION
            </h3>
          </div>
          <div>
            <div style={{ display: "flex", gap: "20px" }}>
              <h6 style={{ fontSize: "30px", fontFamily: "initial" }}>
                2023-2025
              </h6>
              <div>
                <h6 style={{ fontSize: "30px", fontFamily: "initial" }}>
                  Master Of Computer Science
                </h6>
                <p
                  style={{
                    width: "400px",
                    textWrap: "wrap",
                    fontSize: "20px",
                    fontFamily: "initial",
                  }}
                >
                  Master of Science in Computer Science Vels Institute of
                  Technology, Vels University
                  <br /> CGPA: 7.9 / 10
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <h6 style={{ fontSize: "30px", fontFamily: "initial" }}>
                2018-2021
              </h6>
              <div>
                <h6 style={{ fontSize: "30px", fontFamily: "initial" }}>
                  Bachelor Of Computer Science
                </h6>
                <p
                  style={{
                    width: "400px",
                    textWrap: "wrap",
                    fontSize: "20px",
                    fontFamily: "initial",
                  }}
                >
                  Bachelor of Science in Computer Science St.Joseph’s College,
                  Madras University.
                  <br />
                  CGPA: 7/ 10
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="experience">
          <div>
            <h3
              style={{
                fontSize: "30px",
                marginRight: "60px",
                fontFamily: "initial",
              }}
            >
              SKILLS
            </h3>
          </div>
          <div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <h6
                  style={{
                    fontSize: "30px",
                    fontFamily: "initial",
                  }}
                >
                  SKILLS
                </h6>
                <p
                  style={{
                    width: "400px",
                    textWrap: "wrap",
                    fontSize: "20px",
                    fontFamily: "initial",
                  }}
                >
                  <b style={{ fontFamily: "initial" }}>Frontend Skills:</b>{" "}
                  HTML, CSS, JavaScript, React.
                  <br />
                  <b style={{ fontFamily: "initial" }}>Backend Skills:</b>Java,
                  Spring Boot, REST APIs.
                  <br />
                  <b style={{ fontFamily: "initial" }}>Database Skills:</b>{" "}
                  MySQL Tools & Others: Git, Visual Studio, Postman
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
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
              using Spring Boot and React.js <br />• Implemented login for
              drivers and customers with MySQL as database <br />• Tools Used:
              Java, Spring Boot, React.js, MySQL, REST APIs
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
      <footer className="footer">
        <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
        <div className="footeritems">
          <div>
            <h6 style={{ fontSize: "20px", fontFamily: "initial" }}>Phone</h6>
            <h6 style={{ fontSize: "20px", fontFamily: "initial" }}>
              9025991250
            </h6>
          </div>
          <div>
            <h6 style={{ fontSize: "20px", fontFamily: "initial" }}>Email</h6>
            <h6 style={{ fontSize: "20px", fontFamily: "initial" }}>
              naveenkumarbg98@gmail
            </h6>
          </div>
          <div>
            <h6 style={{ fontSize: "20px", fontFamily: "initial" }}>
              Contact Me
            </h6>
            <h6 style={{ fontSize: "20px", fontFamily: "initial" }}>
              9025991250
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
