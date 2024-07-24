import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Pizza from "../models/Pizza";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../assets/navbar.css";
import { gsap } from "gsap";

function Navbar(props) {
  const navigate = useNavigate();
  const userProfile = JSON.parse(localStorage.getItem("currentUser"));

  function handleLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("OTP");
    localStorage.removeItem("Admin");
    localStorage.removeItem("CartItems");
    localStorage.removeItem("currentUser");
  }

  useEffect(() => {}, []);

  return (
    <nav
      className="navbar custom-navbar navbar-expand-lg navbar-dark ps-5 pe-5"
      style={{ backgroundColor: "#ffe9df" }}
    >
      <div className="container-fluid ">
        <div className="nav-left d-flex justify-content-around flex-row align-items-center">
          <div
            className="fs-1 font-weight-bold logo-name"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Savor Haven
          </div>
        </div>

        <div className="nav-right collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2"></ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <ul>
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </ul>
            </div>
          ) : (
            <div className="d-flex justify-content-around ">
              <div className="profile-section">
                <div
                  className="px-4 fs-4 font-weight-bold"
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={() => navigate("/cart")}
                >
                  Cart
                  <Badge pill bg="danger">
                    {props.length}
                  </Badge>
                </div>
                {localStorage.getItem("Admin") === "true" && (
                  <div
                    className="px-4 fs-4 font-weight-bold"
                    style={{ cursor: "pointer", color: "black" }}
                    onClick={() => navigate("/admin")}
                  >
                    Admin
                  </div>
                )}
                <div
                  className="px-4 fs-4 font-weight-bold"
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={() => navigate("/myorder")}
                >
                  Orders
                </div>
                <div className="dropdown px-4">
                  <div
                    className="dropdown-btn profile-info d-flex"
                    onClick={() => navigate("/profile")}
                    style={{ cursor: "pointer", color: "black" }}
                  >
                    <img src={userProfile.imgUrl} alt={userProfile.name} />
                    <div
                      className="fs-4 font-weight-bold"
                      style={{ color: "black" }}
                    >
                      {userProfile.name}
                    </div>
                  </div>
                </div>
                <div
                  className="px-4 fs-4 font-weight-bold"
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
