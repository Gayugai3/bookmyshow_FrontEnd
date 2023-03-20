import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { config } from "./../Config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ViewDetails from "../user_pages/ViewDetails";

function MovieCards() {
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();
  const getMovies = async () => {
    try {
      const movies = await axios.get(`${config.api}/movies/recentmovies`);
      if (movies) {
        setMovieData(movies.data.newmve);
        console.log(movies.data.newmve);
        // toast.success("Success");
      } else {
        // toast.error("Movies not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h3 style={{ marginLeft: "10%", marginTop: "3%" }}>
        <strong>Recommended Movies</strong>
      </h3>
      <div className="container">
        <div className="row">
          {movieData.map((movie) => {
            return (
              <div className="col-lg-3">
                <Card
                  style={{
                    width: "13.3rem",
                    marginLeft: "10%",
                    marginTop: "2%",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={movie.mve_poster}
                    style={{ height: 250, width: 210 }}
                  />
                  <Card.Body>
                    <Card.Title>{movie.mve_name}</Card.Title>

                    <button
                      variant="primary"
                      onClick={() =>
                        navigate(`/mainpage/viewdetails/${movie._id}`)
                      }
                      className="btn btn-primary"
                    >
                      View Details
                    </button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MovieCards;
