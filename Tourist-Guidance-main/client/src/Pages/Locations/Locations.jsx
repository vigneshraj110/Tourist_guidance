import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/TnCard/Card";
const Locations = () => {
  const { name } = useParams();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://pleasant-pink-puppy.cyclic.app/api/v1/locations/${name}`
      );
      setPlaces([...data]);
    };
    getData();
  }, []);
  console.log(places);
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="head">
          Top Destinations in{" "}
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </h1>
        <p className="para">
          {" "}
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
      );
    </div>
  );
};

export default Locations;
