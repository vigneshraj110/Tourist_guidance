import React from "react";
import img from "../../assests/Lotus.jpg";
import "./Hotels.scss";
const Hotels = (props) => {
  return (
    <div id="hotelContainer">
      <img className="hotelimage" src={img} alt="img" />
      <h1 className="hotelName">{props.name}</h1>
      <p className="distance">Distance : {props.distance} </p>
      <p className="rating"> Rating : {props.rating} ⭐</p>
    </div>
  );
};

export default Hotels;
