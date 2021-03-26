import React, { Component } from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
      </div>
    );
  }
}

export default BadgeNew;
