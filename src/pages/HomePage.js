import React from "react";

import Titlebar from "./../user_components/Titlebar";
import Slider from "./../user_components/Slider";
import MovieCards from "../user_components/MovieCards";

function HomePage() {
  return (
    <>
      <Titlebar />
      <Slider />
      <MovieCards />
    </>
  );
}

export default HomePage;
