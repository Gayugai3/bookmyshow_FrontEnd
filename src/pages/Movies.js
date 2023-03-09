import React, { useEffect, useState } from "react";
import MovieTable from "../admin_components/MovieTable";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../Config";
import { toast } from "react-toastify";

function Movies() {
  // const initialRows = [];
  const [movieData, setMovieData] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await axios.get(`${config.api}/movies/allmovies`);
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
    getMovies();
  }, []);

  console.log(movieData);
  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h3>All Movies</h3>
        <Link className="btn btn-primary" to="/portal/addmovie">
          Add Movie
        </Link>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Movie ID</th>
            <th scope="col">Movie Name </th>
            <th scope="col">Release Date</th>
            <th scope="col">Director</th>
            <th scope="col">Actor</th>
            <th scope="col">Actress</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((mve) => {
            return <MovieTable mve={mve} getfn={getMovies} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Movies;
