import React from "react";
import { createRoot } from "react-dom/client";
import Carousel from "./Carousel.jsx";
import "./index.css";

const mount = document.getElementById("projects-carousel");

if (mount) {
  createRoot(mount).render(<Carousel />);
}
