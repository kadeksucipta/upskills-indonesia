import React from "react";
import "./Navbar.css";
import logo from "../../assets/UPSKILLS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";

const Navbar = () => {
  const handleNotice = () => {
    Swal.fire({
      title: "Fitur Sedang di bangun !",
      icon: "warning",
    });
  };

  return (
    <React.Fragment>
      <div className="container-navbar">
        <div className="navbar">
          <img className="logo-upskills" src={logo} alt="" />
          <p className="item-navbar" onClick={() => handleNotice()}>HOME</p>
          <p className="item-navbar" onClick={() => handleNotice()}>KELAS</p>
          <p className="item-navbar" onClick={() => handleNotice()}>PROGRAM</p>
          <div className="field-login">
            <FontAwesomeIcon className="icon-user" icon={faUserCircle} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
