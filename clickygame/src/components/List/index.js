import React from "react";
import "./List.css";

function List(props) {
  return <h1 className="list">{props.children}</h1>;
}

export default List;
