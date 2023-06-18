import React, { useState } from "react";
import "../CSS/Navbar.css";
import logo from "../images/logshort.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const toast = useToast();
  const navigate = useNavigate();
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    if (!user?.name) {
      toast({
        title: "Please Login First",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast({
        title: "Logout Successful",
        position: "top",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "white" }}>
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-sections">
        <div className="navbar-stats">
          <a href="/stats">Stats</a>
        </div>
        <div className="navbar-feedback">
          <a href="/feedback">Feedback</a>
        </div>
        <div className="navbar-dropdown">
          <button onClick={handleDropdownToggle}>
            {user?.name ? user?.name : "Login/Signup"}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {user.name ? (
                <>
                  <a href="/admin-login">Admin</a>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a href="/signup">Sign Up</a>
                  <a href="/login">Login</a>
                  <a href="/admin-login">Admin</a>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
