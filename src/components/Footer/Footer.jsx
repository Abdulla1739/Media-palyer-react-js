import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div  className="container mt-5 w-100">
      <div className="d-lg-flex justify-content-between">
        <div style={{ width: "400px" }} className="intro ">
          <h5 className="py-2">
            <i className="fa-solid fa-music me-2"></i>Media Player
          </h5>
          <p>
            Designed and built with all the love in the world by Luminar team
            with the help of our contributors
          </p>
          <p>Code Licensed Luminar, docs CC by 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5 className="py-2">Links</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <Link
            to={"/history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            History Page
          </Link>
        </div>
        <div className="Guides d-flex flex-column">
          <h5 className="py-2">Guides </h5>
          <a
            href="https://react.dev/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React JS
          </a>
          <a
            href="https://reactrouter.com/en/main"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React Routing
          </a>
          <a
            href="https://react-bootstrap.github.io/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React Bootstrap
          </a>
        </div>
        <div className="Contact d-flex flex-column">
          <h5 className="py-2">Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Email id Please"
              className="form-control"
            />
            <button className="btn btn-info ms-2">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <p>Copyright © 2024 Media Player. Built with React.</p>
      </div>
    </div>
  );
}

export default Footer;
