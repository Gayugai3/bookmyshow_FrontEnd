import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { config } from "./../Config";

function Theatre() {
  const [theatres, setTheatres] = useState([]);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      theatre_name: "",
      theatre_location: "",
      theatre_capacity: "",
    },
    validationSchema: yup.object({
      theatre_name: yup.string().required().min(5),
      theatre_location: yup.string().required().min(3),
      theatre_capacity: yup.number().required().max(1000),
    }),

    onSubmit: async (values) => {
      try {
        const addtheatre = await axios.post(
          `${config.api}/theatres/create`,
          values
        );
        console.log(addtheatre.data);
        // alert(addtheatre.data.message);
        toast.success("Theatre added Successfully");
        getTheatres();
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    },
  });

  const getTheatres = async () => {
    try {
      const theatres = await axios.get(`${config.api}/theatres/listtheatres`);
      if (theatres) {
        setTheatres(theatres.data.newTheatres);
      } else {
        alert("Theatres not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheatres();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pr-3">
            <h3>Theatres</h3>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Theatre ID</th>
                  <th scope="col">Theatre Name </th>
                  <th scope="col">Location</th>
                  <th scope="col">Capacity</th>
                  {/* <th scope="col">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {theatres.map((hall) => {
                  return (
                    <tr>
                      <td>{hall._id}</td>
                      <td>{hall.theatre_name}</td>
                      <td>{hall.theatre_location}</td>
                      <td>{hall.theatre_capacity}</td>

                      {/* <td>
                        <Link
                          className="btn btn-info btn-sm"
                          to={`/portal/moviedetail/${mve._id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="btn btn-primary btn-sm ml-1"
                          to={`/portal/editmovie/${mve._id}`}
                        >
                          Edit
                        </Link>
                        <button className="btn btn-danger btn-sm ml-1">
                          Delete
                        </button>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <h3>Add New Theatre</h3>
            <form onSubmit={formik.handleSubmit}>
              <label>Theatre Name</label>
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
              <label>Theatre Location</label>
              <br />
              <input
                name="theatre_location"
                type="text"
                className="form-control"
                value={formik.values.theatre_location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.theatre_location && formik.errors.theatre_location
                ? formik.errors.theatre_location
                : null}
              <br />
              <label>Theatre Capacity</label>
              <br />
              <input
                name="theatre_capacity"
                type="text"
                className="form-control"
                value={formik.values.theatre_capacity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.theatre_capacity && formik.errors.theatre_capacity
                ? formik.errors.theatre_capacity
                : null}
              <br />
              <button type={"submit"} className="btn btn-primary ">
                Save theatre
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Theatre;
