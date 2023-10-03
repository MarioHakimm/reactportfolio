import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div id="headerMain">
        <Link to={"/"}>
          <button className="btn-header">Home</button>
        </Link>
        <Link to={"/ContactUs"}>
          <button className="btn-header">Contact Us</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
