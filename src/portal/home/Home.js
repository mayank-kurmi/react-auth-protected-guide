import React from "react";

import Carousel from "../carousel/Carousel";
import Products from "../products/Products";

const Home = () => {
  const carouselStyle = {
    marginTop: "0px",
    maxWidth: "100%!imprtant",
  };
  return (
    <React.Fragment>
      <div style={{ carouselStyle }}>
        <Carousel />
        <Products />
      </div>
    </React.Fragment>
  );
};

export default Home;
