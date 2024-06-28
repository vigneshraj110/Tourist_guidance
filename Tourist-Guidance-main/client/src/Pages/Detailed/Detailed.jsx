import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detailed.scss";
import Navbar from "../../Components/Navbar/Navbar";
import CustomMap from "../../Components/CustomMap/CustomMap";
import Hotels from "../../Components/Hotelscard/Hotels";
const Detailed = () => {
  const { id } = useParams();
  const [place, setplace] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://pleasant-pink-puppy.cyclic.app/api/v1/place/${id}`
      );
      setplace(data);
    };
    getData();
  }, []);

  if (place == null) return <p>Loading....</p>;
  //console.log(place);

  return (
    <div id="detailedinfo">
      <Navbar />
      <div className="detail">
        <h1 className="titlehead">{place["Place Name"]}</h1>
        <img className="imgdetail" src={place["Image"]} alt="img" />
        <p className="description">{place.Description}</p>
        <h1 className="titlehead"> G-Map Location</h1>
        <CustomMap lat={place?.Latitude} lng={place?.Longitude} />
        <h1 className="titlehead">Hotels Nearby </h1>

        <div className="hotellist">
          {place["Hotels near the Place"].map((hotel, idx) => {
            return (
              <Hotels
                name={hotel["Hotel Name"]}
                distance={hotel["Distance to Place"]}
                rating={5}
                key={idx}
              />
            );
          })}
        </div>
        <h1 className="titlehead" style={{ paddingBottom: "32px" }}>
          For Taxi and More Assistance Upgrade to Premium 🔥➡️
        </h1>
      </div>
    </div>
  );
};

export default Detailed;
