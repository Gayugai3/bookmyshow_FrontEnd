import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "./../Config";
import { toast } from "react-toastify";

function MovieTable({ mve, getfn }) {
  console.log(mve);
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      const delmve = await axios.delete(`${config.api}/movies/delmve/${id}`);
      toast.success(delmve.data.message);
      getfn();
    }
  };



  return (
    <tr>
      <td>{mve._id}</td>
      <td>{mve.mve_name}</td>
      <td>{mve.release_date}</td>
      <td>{mve.director}</td>
      <td>{mve.actor}</td>
      <td>{mve.actress}</td>
      <td>
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
        <button
          className="btn btn-danger btn-sm ml-1"
          onClick={() => handleDelete(mve._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MovieTable;
