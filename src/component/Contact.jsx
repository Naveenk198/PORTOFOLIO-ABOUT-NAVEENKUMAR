import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../index.css";
import { First, Last } from "react-bootstrap/esm/PageItem";
import Swal from "sweetalert2";
const Contact = () => {
  let [form, setform] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  let [error, seterror] = useState();
  let handlesubmit = (e) => {
    e.preventDefault();
    if (
      (form.Firstname == "" && form.Lastname !== "" && form.email !== "",
      form.message !== "" && form.subject !== "")
    ) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      setform({
        Firstname: "",
        Lastname: "",
        email: "",
        subject: "",
        message: "",
      });
      return;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The All Field!",
      });
    }
  };
  let handlechange = (e) => {
    let { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
    console.log({ ...form, [name]: value });
  };
  return (
    <div className="contact">
      <div style={{ display: "flex", justifyContent: "center", gap: "140px" }}>
        <div>
          <h2>CONTACT</h2>
          <p>Looking forward to hearing from you</p>
          <div>
            <h4>Phone</h4>
            <p>9025991250</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>naveenkumarbg98@gmail.com</p>
          </div>
        </div>
        <div style={{ display: "grid", rowGap: "30px" }}>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <label htmlFor="" style={{ marginBottom: "20px" }}>
                FIRST NAME*
              </label>
              <br />
              <input
                type="text"
                name="Firstname"
                onChange={handlechange}
                value={form.Firstname}
              />
            </div>
            <div>
              <label htmlFor="" style={{ marginBottom: "20px" }}>
                LAST NAME*
              </label>
              <br />
              <input
                name="Lastname"
                type="text"
                onChange={handlechange}
                value={form.Lastname}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <label htmlFor="" style={{ marginBottom: "20px" }}>
                {" "}
                Email
              </label>
              <br />
              <input
                type="email"
                onChange={handlechange}
                value={form.email}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="" style={{ marginBottom: "20px" }}>
                SUBJECT
              </label>
              <br />
              <input
                type="text"
                onChange={handlechange}
                name="subject"
                value={form.subject}
              />
            </div>
          </div>
          <div>
            <h5>Message</h5>
            <textarea
              name="message"
              value={form.message}
              style={{ width: "32vw" }}
              onChange={handlechange}
            ></textarea>
            <br />
            <Button
              onClick={handlesubmit}
              type="contained"
              style={{ width: "32vw", marginTop: "10px" }}
            >
              submit
            </Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
        <div className="footeritems">
          <div>
            <h6>Phone</h6>
            <h6>9025991250</h6>
          </div>
          <div>
            <h6>Email</h6>
            <h6>naveenkumarbg@gmail</h6>
          </div>
          <div>
            <h6>Follwe Me</h6>
            <h6>9025991250</h6>
          </div>
          <div>
            <h6>© 2035 By Nicol Rider.</h6>
            <h6>Powered and secured by Wix</h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
