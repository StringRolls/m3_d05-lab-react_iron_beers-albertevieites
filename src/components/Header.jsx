import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link style={{ textDecoration: "none" }} to="/">
        <i className="fas fa-home fa-2x" style={{ color: "white" }}></i>
      </Link>
    </header>
  );
}

export default Header;
