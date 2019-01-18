import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <p><strong>Name:</strong> {props.name}</p>
      </div>
      <span onClick={() => props.shuffleCard(props.id)} className="shuffle">
        𝘅
      </span>
    </div>
  );
}

export default Card;
