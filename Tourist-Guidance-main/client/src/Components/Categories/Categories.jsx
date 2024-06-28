import React from "react";
import img from "./assests/Lotus.jpg";
import "./Categories.scss";
const Categories = () => {
  return (
    <div id="cat">
      <div className="category">
        <div className="cato">
          <div className="head">Categories</div>
          <p className="content">
            Much destination here but don't be confuse! It's already grouped by
            category.
          </p>
        </div>
        <div>Arrow</div>
      </div>
      <div className="card">
        <img className="img" src={img} alt="img" />
        <p>Beach</p>
      </div>
    </div>
  );
};

export default Categories;
