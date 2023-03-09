import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "./../Config";

function Query() {
  // const email = localStorage.getItem("email");

  const [message, setMessage] = useState([]);

  const getMsg = async () => {
    try {
      const msg = await axios.get(`${config.api}/user/getcontact`);
      if (msg) {
        setMessage(msg.data.newcontact);
        console.log(msg.data.newcontact);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMsg();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h3>Query</h3>
        <Link className="btn btn-primary btn-sm" to="/portal/movies">
          Back
        </Link>
      </div>

      <table class="table">
        <thead>
          <tr class="table-primary">
            <th scope="col">Name</th>
            <th scope="col">Phone number</th>
            <th scope="col">Email ID</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {message.map((msg) => {
            return (
              <tr>
                <td>{msg.username}</td>
                <td>{msg.ph_no}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Query;
