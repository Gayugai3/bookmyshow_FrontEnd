import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "./../Config";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";

function Booknow({ mve_id }) {
  const userContextData = useContext(UserContext);

  const email = localStorage.getItem("email");

  let navigate = useNavigate();

  const [data, setData] = useState([]);

  const [theatre, setTheatre] = useState([]);

  // const [show, setShow] = useState([]);
  // const [price, setPrice] = useState("");

  const getDetails = async () => {
    try {
      const details = await axios.get(`${config.api}/theatres/alldetails`);
      console.log(details);
      if (details) {
        // const data = details.data.newdetails;
        // const data1 = data.filter((a, b) => data.indexOf(a) == b);

        // console.log(data1, data);
        console.log("Success");
        console.log(details.data.showdetails);
        setData(details.data.showdetails);
        setTheatre(details.data.name);

        toast.success("Got the data");
      } else {
        toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getTheatres = async () => {
  //   try {
  //     const detail = await axios.get(`${config.api}/theatres/alltheatres`);
  //     console.log(detail);
  //     if (detail) {
  //       // console.log("Success");
  //       console.log(detail.data);
  //       setTheatre(detail.data);

  //       toast.success("Got the data");
  //     } else {
  //       toast.error("Movies not found");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getDetails();
    // getTheatres();
  }, []);

  const formik = useFormik({
    initialValues: {
      book_date: "",
      theatre_name: "",
      show_name: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      try {
        const bookings = await axios.post(
          `${config.api}/bookings/bookticket/${email}/${mve_id}`,
          values
        );
        console.log(bookings);

        userContextData.setBookingDetails(bookings.data);

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
                    console.log(formik.values.show_name);
                    return (
                      <option value={det}>
                        {console.log(det)}
                        {det}
                      </option>
                    );
                  })}
                </select>
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
                  {/* <option value={data[0]}>{`Hai ${data}`} </option> */}
                  {console.log(theatre)}
                  {theatre.map((det) => {
                    return (
                      <option value={det}>
                        {console.log(det)}
                        {det}
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
