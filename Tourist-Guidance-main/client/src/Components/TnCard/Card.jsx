import React from "react";
import img from "../../assests/maps-pin-black-icon.png";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/Detailed/${props.id}`);
  };
  return (
    <div className="cardholder" role="button" onClick={handleNavigate}>
      <div class="bg-img">
        <img src={props.image_url} alt="img"></img>
      </div>
      <p className="place">{props.name}</p>
      <p className="description">{props.desc}</p>
      <p className="location">
        <img src={img} alt="t"></img> {props.loc}
      </p>
    </div>
  );
}
Card.defaultProps={
  image_url:"https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
}
export default Card;

