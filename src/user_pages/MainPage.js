import React from "react";
import { Outlet } from "react-router-dom";
import Titlebar from "./../user_components/Titlebar";

function MainPage() {
  return (
    <>
      <div id="content">
        <Titlebar />
        <div className="container-fluid">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default MainPage;
