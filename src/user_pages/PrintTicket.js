import React from "react";
import { Card } from "react-bootstrap/Card";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";

function PrintTicket() {
  const { bookingDetails } = useContext(UserContext);

  return (
    <>
      {/* <div class="card mb-3 mt-3"> */}
        <div class="row g-0 d-flex justify-content-center ">
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">
              <h3 className="text-center">Booking Details</h3>
            </div>
            <div className="col-lg-6 d-flex  text-right">
              <table class="table justify-content-center        ">
                <thead></thead>
                <tbody>
                  <tr>
                    <th scope="col">Movie Name </th>
                    <td>{bookingDetails.mve_name}</td>
                  </tr>
                  <tr>
                    <th scope="col">Theatre Name</th>
                    <td>{bookingDetails.theatre_name}</td>
                  </tr>
                  <tr>
                    <th scope="col">Show details</th>
                    <td>{bookingDetails.show_name}</td>
                  </tr>
                  <tr>
                    <th scope="col">Booking Date</th>
                    <td>{bookingDetails.book_date}</td>
                  </tr>
                  <tr>
                    <th scope="col">Number of seats</th>
                    <td>{""}</td>
                  </tr>
                  <tr>
                    <th scope="col">Amount</th>
                    <td>{""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default PrintTicket;
