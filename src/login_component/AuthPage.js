import React from "react";
import { Outlet } from "react-router-dom";
import Titlebar from "./../user_components/Titlebar";

function AuthPage() {
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

export default AuthPage;
