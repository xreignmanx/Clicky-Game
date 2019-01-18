import React from "react";
import "./Header.css";

function Header(props) {
  return <div className="header">{props.children}
    <p>Score:</p>
  </div>;
}

export default Header;
