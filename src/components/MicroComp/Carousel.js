import React, { useState } from "react";
import { useLocation } from "react-router-dom";
export default function Carousel({ data, logo, type }) {
  const [images, setImages] = useState(data);
  const web = {
    height: "40vw",
    width: "70vw",
  };
  const android = {
    height: "90vh",
    width: "50vh",
  };
  console.log(type == "Android" ? android : web);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        id="carouselExampleAutoplaying"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={images[0]}
              style={type == "Android" ? android : web}
              alt="..."
            />
          </div>
          {images.map((items,index) => (
            <div className="carousel-item" key={index}>
              <img
                src={items}
                alt="..."
                style={type == "Android" ? android : web}
              />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
