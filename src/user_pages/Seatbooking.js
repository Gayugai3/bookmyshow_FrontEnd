import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import { config } from "./../Config";

function Seatbooking() {
  const [movieData, setMovieData] = useState([]);
  const userContextData = useContext(UserContext);

  const getTheatredetails = async () => {
    try {
      const movies = await axios.get(`${config.api}/bookings/`);
      if (movies) {
        setMovieData(movies.data.newmve);
        console.log(movies.data.newmve);
        toast.success("Success");
      } else {
        toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheatredetails();
  }, []);

  const formik = useFormik({
    initialValues: {
      book_date: userContextData.bookingDetails.book_date,
      theatre_name: userContextData.bookingDetails.theatre_name,
      show_name: userContextData.bookingDetails.show_name,
      // show_time: "",
      seats_count: "",
      seat_number: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      //   try {
      //     const bookings = await axios.post(
      //       `${config.api}/bookings/bookticket/${email}                               `,
      //       values
      //     );

      //     console.log(bookings.data);

      //     alert(bookings.data.message);
      //     // navigate("/mainpage/seatbooking");
      //   } catch (error) {
      //     console.log(error);
      //     alert(error.response.data.message);
      //   }
    },
  });

  return (
    <>
      <h3>Movie</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>

          <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <th scope="col">Booking Date</th>
                    <td>
                      <input
                        name="book_date"
                        type="text"
                        className="form-control"
                        value={formik.values.book_date}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Theatre Name</th>
                    <td>
                      <input
                        name="book_date"
                        type="text"
                        className="form-control"
                        value={formik.values.book_date}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">show Time</th>
                    <td>
                      <input
                        name="book_date"
                        type="text"
                        className="form-control"
                        value={formik.values.book_date}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Ticket Price</th>
                    <td>
                      <input
                        name="book_date"
                        type="text"
                        className="form-control"
                        value={formik.values.book_date}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Number of Seats</th>
                    <td>
                      <input
                        name="book_date"
                        type="number"
                        className="form-control"
                        value={formik.values.book_date}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Seat Numbers</th>
                    <td>
                      <input
                        name="book_date"
                        type="text"
                        className="form-control"
                        value={formik.values.book_date}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button type="submit" className="btn btn-success">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seatbooking;
