import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const F = {
  name: "Weiß",
  image: require("../Assets/logo.png"),
};

function Titlebar() {
  const navigate = useNavigate();

  const userContextData = useContext(UserContext);

  const home = () => {
    userContextData.setIsvisible(false);
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark">
        <Container style={{ height: "3rem" }}>
          <Navbar.Brand href="#home">
            <img
              src={F.image}
              width="150"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <ul
            className="navbar-nav  navbar navbar-dark accordion"
            id="accordionSidebar"
          >
            <div
              className="navbar-brand d-flex row text-light fs-5"
              href="index.html"
            >
              <div className="d-flex justify-content-end">
                <li className="nav-item ">
                  <Link className="nav-link" to={"/"}>
                    <span className="text-light"> Home</span>
                  </Link>
                </li>

                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    to={"/mainpage/movies/allmovies"}
                  >
                    <span className="text-light"> All Movies</span>
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink className="nav-link" to={"/mainpage/contact"}>
                    <span className="text-light"> Contact</span>
                  </NavLink>
                </li>

                {userContextData.isvisible ? (
                  <>
                    <li className="nav-item ">
                      <NavLink className="nav-link" to={"/mainpage/mybookings"}>
                        <span className="text-light fs-1"> My Bookings</span>
                      </NavLink>
                    </li>

                    <li className="nav-item ">
                      <NavLink className="nav-link" to={"/"}>
                        <span className="text-light">
                          {" "}
                          {`Welcome | ${userContextData.user}`}{" "}
                        </span>
                      </NavLink>
                    </li>

                    <button
                      className="btn btn-outline-light"
                      onClick={() => home()}
                      type={"submit"}
                    >
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <li className="nav-item ">
                      <NavLink className="nav-link" to={"/auth/login"}>
                        <span className="text-light"> Login</span>
                      </NavLink>
                    </li>

                    <li className="nav-item ">
                      <NavLink className="nav-link" to={"/auth/register"}>
                        <span className="text-light"> Register</span>
                      </NavLink>
                    </li>
                  </>
                )}
              </div>
            </div>
          </ul>
        </Container>
      </Navbar>
    </>
  );
}

export default Titlebar;
