import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

import { config } from "./../Config";

function ContactForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      ph_no: "",
      message: "",
    },
    validate: (values) => {
      let errors = {};
      let pattern = new RegExp(/^[a-zA-Z\-]+$/);
      if (!values.username) {
        errors.username = "Please enter the name";
      } else if (values.username.length < 5) {
        errors.username = "Length should be more than 5 Characters";
      } else if (values.username.length > 20) {
        errors.username = "Length should be less than 20 Characters";
      } else if (!pattern.test(formik.values.username)) {
        errors.username = "Enter the valid Name";
      }

      if (!values.email) {
        errors.email = "Please enter your email address";
      }
      if (!values.ph_no) {
        errors.ph_no = "Please enter your ph_no";
      } else if (values.ph_no.length < 10 && values.ph_no.length > 10) {
        errors.ph_no = "Please enter valid ph_no";
      }

      if (!values.message) {
        errors.message = "Please enter the message";
      }
    },
    onSubmit: async (values) => {
      try {
        const contactmsg = await axios.post(
          `${config.api}/user/contact`,
          values
        );
        console.log(contactmsg.data);
        alert("Submitted");
        navigate("/");
      } catch (error) {
        console.log(error);
        // alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container col-lg-6 mt-5">
      <h2 className="mb-3 d-flex justify-content-center">Leave a Message</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type={"text"}
            className="form-control form-control-user mb-2"
            name={"username"}
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />
          {formik.errors.username ? (
            <span style={{ color: "red" }}> {formik.errors.username}</span>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type={"text"}
            className="form-control form-control-user mb-2"
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter Email Address..."
          />
          {formik.errors.email ? (
            <span style={{ color: "red" }}> {formik.errors.email}</span>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Phone number
          </label>
          <input
            type={"number"}
            className="form-control form-control-user"
            name={"ph_no"}
            onChange={formik.handleChange}
            value={formik.values.ph_no}
            placeholder="Enter ph_no"
          />
          {formik.errors.ph_no ? (
            <span style={{ color: "red" }}> {formik.errors.ph_no}</span>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <input
            type={"text"}
            className="form-control form-control-user"
            name={"message"}
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Enter your message"
          />
          {formik.errors.gender ? (
            <span style={{ color: "red" }}> {formik.errors.message}</span>
          ) : null}
        </div>
        <button className="btn btn-danger float-right" type={"submit"}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
