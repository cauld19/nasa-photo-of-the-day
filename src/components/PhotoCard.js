import React from "react";

export default function PhotoCard(props) {
  return (
    <div className="photo-card">
        <h2>Photo name: {props.title}</h2>
        <h3>Date: {props.date}</h3>
        <img src={props.image} alt="Space"></img>
        <p>{props.explanation}</p>
      
      
    </div>
  );
}