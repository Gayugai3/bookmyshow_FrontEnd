import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faPager,
  faClapperboard,
  faStore,
  faPodcast,
  faUsers,
  faMoneyBill,
  faRightFromBracket,
  faComments,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import UserContext from "../context/UserContext";

function Sidebar() {
  const userContextData = useContext(UserContext);

  const navigate = useNavigate();

  const home = () => {
    userContextData.setIsvisible(false);
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Show Admin</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/dashboard"}>
            <FontAwesomeIcon icon={faTableColumns} />
            <span> Dashboard</span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/movies"}>
            <FontAwesomeIcon icon={faClapperboard} />
            <span> Movies</span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/theatres"}>
            <FontAwesomeIcon icon={faStore} />
            <span> Theatre </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/shows"}>
            <FontAwesomeIcon icon={faPodcast} />
            <span> Shows </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/users"}>
            <FontAwesomeIcon icon={faUsers} />
            <span> Users </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/bookings"}>
            <FontAwesomeIcon icon={faMoneyBill} />
            <span> Bookings </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to={"/portal/query"}>
            <FontAwesomeIcon icon={faComments} />
            <span> Query </span>
          </Link>
        </li>

        {/* <li className="nav-item ">
          <Link className="nav-link" to={"/"}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span> Logout </span>
          </Link>
        </li> */}
        <li className="nav-item">
          <button className="nav-link" onClick={() => home()} style={{}}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span> Logout </span>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
