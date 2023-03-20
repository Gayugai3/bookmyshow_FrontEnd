import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import * as Yup from "yup";
import { config } from "./../Config";

function Login() {
  let navigate = useNavigate();
  const userContextData = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        let login = await axios.post(`${config.api}/user/login`, values);
        if (login.data.token) {
          localStorage.setItem("token", login.data.token);
          localStorage.setItem("email", login.data.email);
          localStorage.setItem("role", login.data.role);
          localStorage.setItem("name", login.data.name);
          userContextData.setmailid(login.data.email);
          userContextData.setUser(login.data.name);
          const role = await localStorage.getItem("role");
          console.log(role);

          {
            role == "admin" ? navigate("/portal/dashboard") : navigate("/");
          }
          userContextData.setIsvisible(true);
        } else {
          alert(login.data.message);
          // navigate("/auth/login");
          userContextData.setIsvisible(false);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container bg-dark text-white p-5 mt-5">
      {/* Outer Row */}
      <div className="row justify-content-center ">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-12  justify-content-center">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Welcome to BookmyShow
                      </h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user">
                      <div className="form-group">
                        <label className="p-1 text-muted">Email</label>
                        <input
                          type={"email"}
                          className="form-control form-control-user mb-2"
                          name={"email"}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          placeholder="Enter Email Id..."
                        />
                        {formik.errors.email ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.email}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label className="p-1 text-muted">Password</label>
                        <input
                          type={"password"}
                          className="form-control form-control-user"
                          name={"password"}
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Enter Password..."
                        />
                        {formik.errors.password ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                      <button
                        // onClick={() => userContextData.setIsvisible(true)}
                        type={"submit"}
                        className=" btn btn-primary mt-2 float-left"
                      >
                        Login
                      </button>
                      <hr />
                    </form>
                    <div className="row justify-content-end">
                      <Link to="/auth/forgotpassword">Forgot Password?😔</Link>
                      <Link to="/auth/register">Create an Account...!👈</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
