import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "./../Config";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";

function Booknow() {
  const userContextData = useContext(UserContext);

  const email = localStorage.getItem("email");

  let navigate = useNavigate();

  const [data, setData] = useState([]);

  // const [theatre, setTheatre] = useState("");
  // const [show, setShow] = useState([]);
  // const [price, setPrice] = useState("");

  const getDetails = async () => {
    try {
      const details = await axios.get(`${config.api}/theatres/alldetails`);
      if (details) {
        // const data = details.data.newdetails;
        // const data1 = data.filter((a, b) => data.indexOf(a) == b);

        // console.log(data1, data);

        console.log(details.data);
        // setData(data);
        toast.success("Success");
      } else {
        toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const formik = useFormik({
    initialValues: {
      book_date: "",
      theatre_name: "",
      show_name: "",
      // show_time: "",
    },

    onSubmit: async (values) => {
      // localStorage.setItem("show_time", values.show_time);

      console.log(values);
      try {
        const bookings = await axios.post(
          `${config.api}/bookings/bookticket/${email}`,
          values
        );

        userContextData.setBookingDetails(values);

        // console.log(bookings.data.bookingdata.insertedId);

        navigate("/mainpage/seatbooking/");
      } catch (error) {
        console.log(error);
        // alert(error.response.data.message);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <th scope="col">Choose Date</th>
              <td>
                <input
                  name="book_date"
                  type="date"
                  className="form-control"
                  placeholder="dd-mm-yyyy"
                  value={formik.values.book_date}
                  onChange={formik.handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="col">Choose theatre</th>
              <td>
                <select
                  className="form-control"
                  name="theatre_name"
                  id="theatre"
                  onChange={formik.handleChange}
                >
                  <option value="">--Please choose an option--</option>
                  {data.map((det) => {
                    return (
                      <option
                        // name="theatre_name"
                        value={det.theatre_name}
                      >
                        {det.theatre_name}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <th scope="col">Choose Show</th>
              <td>
                <select
                  className="form-control"
                  name="show_name"
                  id="show"
                  onChange={formik.handleChange}
                >
                  <option value="">--Please choose an option--</option>
                  {data.map((det) => {
                    console.log(formik.values);
                    return (
                      <option
                        // name="show_name"
                        value={`${det.show_name} - ${det.show_time}`}
                      >
                        {`${det.show_name} - ${det.show_time}`}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="btn btn-success">
          Book Now
        </button>
      </form>
    </>
  );
}

export default Booknow;
