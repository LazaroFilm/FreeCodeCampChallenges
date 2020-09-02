import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar.Brand>The Markdown Machine</Navbar.Brand>
    </div>
  );
};

export default Header;