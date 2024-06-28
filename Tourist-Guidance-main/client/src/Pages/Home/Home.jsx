import React from "react";
import { useState } from "react";
import "./Home.scss";
import Footer from "../../Components/Footer/Footer";
import Slide from "../../Components/Slide/Slide";
import TopDest from "../../Components/TopDest/Topdest";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
const Home = () => {
  const [location, setlocation] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/locations/${location}`);
  };

  return (
    <div>
      <div id="homescreen">
        <Navbar />
        <div className="home">
          <div className="container">
            <p className="ultimate">The ultimate travel guide</p>
            <h1 className="places">Explore Beautiful Places</h1>
          </div>
          <div className="tophead">
            <div className="location">
              <div className="local">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon-name"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="location">Location</p>
              </div>
              <input
                className="inputtext"
                placeholder="Where do you want to go ?"
                type={"text"}
                value={location}
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
            {/* <div className="date">
            <div class="datecont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 icon-name"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <p>Date</p>
            </div>
            <input
              className="datecontain"
              type={"date"}
              style={{ border: "none" }}
            />
          </div> */}
            <div className="search" role="button" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 search-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Slide setloading={setloading} />
      <TopDest setloading={setloading} />
      <Footer />
    </div>
  );
};

export default Home;
