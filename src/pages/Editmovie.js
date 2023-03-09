import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { config } from "./../Config";

function Editmovie() {
  const { id } = useParams();

  const navigate = useNavigate();
  const getMovies = async () => {
    try {
      const movies = await axios.get(`${config.api}/movies/getmve/${id}`);
      if (movies) {
        // setMovieData(movies.data.newmve);
        formik.setValues(movies.data.newmve[0]);
        console.log(movies.data.newmve);
        // console.log(formik.setValues(movies.data.newmve));
        toast.success("Success");
      } else {
        toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const formik = useFormik({
    initialValues: {
      mve_name: "",
      release_date: "",
      director: "",
      actor: "",
      actress: "",
      certificate: "",
      trailer_link: "",
      mve_poster: "",
      description: "",
      // mve_banner: "",
    },
    validationSchema: yup.object({
      mve_name: yup.string().required().min(1),
      release_date: yup.date().required(),
      director: yup.string().required(),
      actor: yup.string().required(),
      actress: yup.string().required(),
      certificate: yup.string().required().min(1),
      trailer_link: yup.string().url().required(),
      mve_poster: yup.string().url().required(),
      description: yup.string().required().min(10),
    }),

    onSubmit: async (values) => {
      try {
        const editmve = await axios.put(
          `${config.api}/movies/editmovie/${id}`,
          values
        );
        console.log(editmve.data);
        // alert(addtheatre.data.message);
        // toast.success(editmve.data.message);
        navigate("/portal/movies");
        // formik.resetForm();
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    },
  });

  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h3>Edit Movie Details</h3>
        <Link className="btn btn-primary btn-sm" to="/portal/movies">
          Back
        </Link>
      </div>
      <div className="col-lg-8">
        <form onSubmit={formik.handleSubmit}>
          <table className="table">
            <tbody>
              <tr>
                <th>Movie Name</th>
                <td>
                  <input
                    name="mve_name"
                    type="text"
                    className="form-control"
                    value={formik.values.mve_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.mve_name && formik.errors.mve_name
                    ? formik.errors.mve_name
                    : null}
                </td>
              </tr>

              <tr>
                <th>Release Date</th>
                <td>
                  <input
                    name="release_date"
                    type="date"
                    className="form-control"
                    value={formik.values.release_date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.release_date && formik.errors.release_date
                    ? formik.errors.release_date
                    : null}
                </td>
              </tr>

              <tr>
                <th>Director</th>
                <td>
                  <input
                    name="director"
                    type="text"
                    className="form-control"
                    value={formik.values.director}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.director && formik.errors.director
                    ? formik.errors.director
                    : null}
                </td>
              </tr>

              <tr>
                <th>Certificate</th>
                <td>
                  <input
                    name="certificate"
                    type="text"
                    className="form-control"
                    value={formik.values.certificate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.certificate && formik.errors.certificate
                    ? formik.errors.certificate
                    : null}
                </td>
              </tr>

              <tr>
                <th>Actor</th>
                <td>
                  <input
                    name="actor"
                    type="text"
                    className="form-control"
                    value={formik.values.actor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.actor && formik.errors.actor
                    ? formik.errors.actor
                    : null}
                </td>
              </tr>

              <tr>
                <th>Actress</th>
                <td>
                  <input
                    name="actress"
                    type="text"
                    className="form-control"
                    value={formik.values.actress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.actress && formik.errors.actress
                    ? formik.errors.actress
                    : null}
                </td>
              </tr>

              <tr>
                <th>Trailer Link</th>
                <td>
                  <input
                    name="trailer_link"
                    type="text"
                    className="form-control"
                    value={formik.values.trailer_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.trailer_link && formik.errors.trailer_link
                    ? formik.errors.trailer_link
                    : null}
                </td>
              </tr>

              <tr>
                <th>Movie Poster</th>
                <td>
                  <input
                    name="mve_poster"
                    type="text"
                    className="form-control"
                    value={formik.values.mve_poster}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.mve_poster && formik.errors.mve_poster
                    ? formik.errors.mve_poster
                    : null}
                </td>
              </tr>

              <tr>
                <th>Description</th>
                <td>
                  <textarea
                    name="description"
                    type="text"
                    className="form-control"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.description && formik.errors.description
                    ? formik.errors.description
                    : null}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="float-right">
            <button className="btn btn-success m-3" type={"submit"}>
              Edit Movie
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Editmovie;
