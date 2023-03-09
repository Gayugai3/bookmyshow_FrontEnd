import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <div className="row">
        <Card title="Theatre" value="0" color="primary" />
        <Card title="Movies" value="0" color="success" />
        <Card title="Users" value="0" color="info" />
        <Card title="Bookings" value="0" color="warning" />
      </div>
    </>
  );
}

export default Dashboard;
