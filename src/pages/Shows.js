import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { config } from "./../Config";
import { toast } from "react-toastify";

function Shows() {
  const [show, setShow] = useState([]);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      show_name: "",
      show_time: "",
      end_time: "",
      theatre_name: "",
      ticket_price: "",
    },
    validationSchema: yup.object({
      show_name: yup.string().required().min(5),
      show_time: yup.string().required(),
      end_time: yup.string().required(),
      theatre_name: yup.string().required(),
      ticket_price: yup.number().required().min(50),
    }),

    onSubmit: async (values) => {
      try {
        const addshow = await axios.post(
          `${config.api}/theatres/addshow`,
          values
        );
        console.log(addshow.data);
        // alert(addtheatre.data.message);
        toast.success(addshow.data.message);
        getShow();
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    },
  });

  const getShow = async () => {
    try {
      const shows = await axios.get(`${config.api}/theatres/allshows`);
      if (shows) {
        setShow(shows.data.newshow);
        // console.log(shows);
        console.log(shows.data.newshow);
      } else {
        alert("Shows not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pr-3">
            <h3>Shows</h3>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Show Name</th>
                  <th scope="col">Show Time </th>
                  <th scope="col">End Time</th>
                  <th scope="col"> Theatre</th>
                  <th scope="col">Ticket Price</th>
                  {/* <th scope="col">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {show.map((show) => {
                  return (
                    <tr>
                      <td>{show.show_name}</td>
                      <td>{show.show_time}</td>
                      <td>{show.end_time}</td>
                      <td>{show.theatre_name}</td>
                      <td>{show.ticket_price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <h3>Add Show</h3>
            <form onSubmit={formik.handleSubmit}>
              <label>Show Name</label>
              <br />
              <input
                name="show_name"
                type="text"
                className="form-control"
                value={formik.values.show_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.show_name && formik.errors.show_name
                ? formik.errors.show_name
                : null}
              <br />
              <label>Show Timing</label>
              <br />
              <input
                name="show_time"
                type="time"
                className="form-control"
                value={formik.values.show_time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.show_time && formik.errors.show_time
                ? formik.errors.show_time
                : null}
              <br />
              <label>End Time</label>
              <br />
              <input
                name="end_time"
                type="time"
                className="form-control"
                value={formik.values.end_time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.end_time && formik.errors.end_time
                ? formik.errors.end_time
                : null}
              <br />
              <label>Select Theatre</label>
              <br />
              <input
                name="theatre_name"
                type="text"
                className="form-control"
                value={formik.values.theatre_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.theatre_name && formik.errors.theatre_name
                ? formik.errors.theatre_name
                : null}
              <br />
              <label>Ticket Price</label>
              <br />
              <input
                name="ticket_price"
                type="text"
                className="form-control"
                value={formik.values.ticket_price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.ticket_price && formik.errors.ticket_price
                ? formik.errors.ticket_price
                : null}
              <br />
              <button type={"submit"} className="btn btn-primary ">
                Save Show
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shows;
