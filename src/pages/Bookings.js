import React from "react";
import { Link } from "react-router-dom";

function Bookings() {
  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h3>Bookings</h3>
        <Link className="btn btn-primary btn-sm" to="/portal/movies">
          Back
        </Link>
      </div>

      <table class="table">
        <thead>
          <tr class="table-primary">
            <th scope="col">Booking ID</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Movie ID</th>
            <th scope="col">Theatre ID</th>
            <th scope="col">Seats</th>
            <th scope="col">Seats number</th>
            <th scope="col">Amount</th>
            <th scope="col">Booking </th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Bookings;
