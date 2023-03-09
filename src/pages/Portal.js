import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../admin_components/Sidebar";
import Topbar from "../admin_components/Topbar";

function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portal;
