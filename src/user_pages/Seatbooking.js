import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import { config } from "./../Config";
// import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquare } from "@fortawesome/free-solid-svg-icons";
import "./Seatbooking.css";
import { useNavigate } from "react-router-dom";

function Seatbooking() {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [seats, setSeats] = useState([]);

  const userContextData = useContext(UserContext);

  function clickable(a) {
    const selectedid = document.getElementById(a).classList;
    if (selectedid.value == "seat") {
      console.log(selectedid);
      setSeats(a);
      console.log(seats);
      selectedid.add("selected");
    } else {
      selectedid.remove("selected");
    }
  }

  const formik = useFormik({
    initialValues: {
      book_date: userContextData.bookingDetails.book_date,
      theatre_name: userContextData.bookingDetails.theatre_name,
      show_name: userContextData.bookingDetails.show_name,
      ticket_price: userContextData.bookingDetails.ticket,
      seat_count: "",
      seat_numbers: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      try {
        // const bookings = await axios.post(
        //   `${config.api}/bookings/bookticket/${email}                               `,
        //   values
        // );

        // console.log(bookings.data);

        // alert(bookings.data.message);
        navigate("/mainpage/printticket");
      } catch (error) {
        console.log(error);
        // alert(error.response.data.message);
      }
    },
  });

  return (
    <section>
      <div className="d-flex justify-content-center mt-5">
        <h3>{`Movie : ${userContextData.bookingDetails.mve_name}`}</h3>
      </div>

      <ul class="showcase">
        <li>
          <div class="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div class="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div class="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div class="screen"></div>

            <div className="allseats">
              <div className="col-numbers">
                <div className="colnumber">1</div>
                <div className="colnumber">2</div>
                <div className="colnumber">3</div>
                <div className="colnumber">4</div>
                <div className="colnumber">5</div>
                <div className="colnumber">6</div>
                <div className="colnumber">7</div>
                <div className="colnumber">8</div>
                <div className="colnumber">9</div>
                <div className="colnumber">10</div>
              </div>

              <div className="row-numbers">
                <div className="rownumber">A</div>
                <div className="rownumber">B</div>
                <div className="rownumber">C</div>
                <div className="rownumber">D</div>
                <div className="rownumber">E</div>
                <div className="rownumber">F</div>
                <div className="rownumber">G</div>
                <div className="rownumber">H</div>
                <div className="rownumber">I</div>
                <div className="rownumber">J</div>
              </div>

              <div class="seatrow">
                <div
                  class="seat"
                  onClick={() => {
                    clickable("A1");
                  }}
                  id="A1"
                ></div>
                <div
                  class="seat"
                  onClick={() => {
                    clickable("A2");
                  }}
                  id="A2"
                ></div>
                <div class="seat" id="A3"></div>
                <div class="seat" id="A4"></div>
                <div class="seat" id="A5"></div>
                <div class="seat" id="A6"></div>
                <div class="seat" id="A7"></div>
                <div class="seat" id="A8"></div>
                <div class="seat" id="A9"></div>
                <div class="seat" id="A10"></div>
              </div>

              <div class="seatrow">
                
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat occupied"></div>
                <div class="seat occupied"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat "></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat occupied"></div>
                <div class="seat occupied"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat occupied"></div>
                <div class="seat occupied"></div>
                <div class="seat occupied"></div>
                <div class="seat"></div>
              </div>

              <div class="backrow">
                <div class="seat occupied"></div>
                <div class="seat occupied"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>

              <div class="seatrow">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
              </div>
            </div>
          </div>

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
                        disabled
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Theatre Name</th>
                    <td>
                      <input
                        name="theatre_name"
                        type="text"
                        className="form-control"
                        value={formik.values.theatre_name}
                        onChange={formik.handleChange}
                        disabled
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">show Name</th>
                    <td>
                      <input
                        name="show_name"
                        type="text"
                        className="form-control"
                        value={formik.values.show_name}
                        onChange={formik.handleChange}
                        disabled
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Ticket Price</th>
                    <td>
                      <input
                        name="ticket_price"
                        type="text"
                        className="form-control"
                        value={formik.values.ticket_price}
                        onChange={formik.handleChange}
                        disabled
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Number of Seats</th>
                    <td>
                      <input
                        name="seat_count"
                        type="number"
                        className="form-control"
                        value={formik.values.seat_count}
                        onChange={formik.handleChange}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">Seat Numbers</th>
                    <td>
                      <input
                        name="seat_numbers"
                        type="text"
                        className="form-control"
                        value={formik.values.seat_numbers}
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
    </section>
  );
}

export default Seatbooking;
