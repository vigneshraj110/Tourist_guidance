import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/TnCard/Card";
import "./Category.scss";
const Category = () => {
  const { name } = useParams();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://pleasant-pink-puppy.cyclic.app/api/v1/category/${name}`
      );
      setPlaces([...data]);
    };
    getData();
  }, []);
  console.log("Hi");
  // console.log(places)
  return (
    <div id="category">
      <div>
        <Navbar />

        <div>
          <h1 className="head">
            Top Destinations of{" "}
            {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}{" "}
            Categories
          </h1>
          <p className="para">
            Much places suits your mood.Explore somewhere interesting
            <br /> and enjoy the vibes!
          </p>
          <div className="card-container-1">
            <div className="cards">
              {places.map((place, index) => {
                return (
                  <Card
                    key={index}
                    name={place["Place Name"]}
                    desc={place.Description}
                    loc={place.Location}
                    image_url={place.Image}
                    id={place._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
