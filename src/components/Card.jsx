import React from "react";
import Details from "./details";
function Card(props) {
  return (
        <div>
            <dl className="card">
          <dt>
            <span>{props.icon}</span>
            <span className="icon-title">{props.title}</span>
          </dt>
          <Details description={props.description} />
        </dl>
        </div>
  );
}

export default Card;
