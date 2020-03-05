import React from "react";

function Card(props) {
  return (
    <div style={{ display: "flex" }}>
      <img src={props.img} alt={props.name} />
      <div>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <span>
          {props.tags.map(tag => (
            <button>{tag}</button>
          ))}
        </span>
      </div>
      <div>
        <button onClick={() => props.updateCount(props.id)} className="">
          {props.count}
        </button>
      </div>
    </div>
  );
}

export default Card;
