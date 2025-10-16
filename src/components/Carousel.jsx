import React from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

<div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/rsz_1burger.jpg" className="d-block w-100" alt="Burger" />
    </div>
    <div className="carousel-item">
      <img src="/rsz_2pizza.jpg" className="d-block w-100" alt="Pizza" />
    </div>
    <div className="carousel-item">
      <img src="/rsz_3momo.jpg" className="d-block w-100" alt="Momo" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>;
