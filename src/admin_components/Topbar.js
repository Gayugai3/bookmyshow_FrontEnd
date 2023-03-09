import React from "react";

function Topbar() {
  const username = localStorage.getItem("email");
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>
      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
          <a>
            {" "}
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {`Welcome |${username}`}
            </span>
            <img
              className="img-profile rounded-circle"
              height={"40"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&usqp=CAU"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
