import React, { useEffect, useState } from "react";
import "./Slide.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Slide = ({ setloading }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://pleasant-pink-puppy.cyclic.app/api/v1/categories"
      );
      setSlides([...data]);
    };
    setloading(true);
    getData();
  }, [slides]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (slides.length - 8));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 8 : prevIndex - 1
    );
  };
  const handleNavigate = (e, title) => {
    e.preventDefault();
    navigate(`/category/${title}`);
  };

  return (
    <div id="slide" className="slide-container">
      <div className="category">
        <div className="cato">
          <div className="head">Categories</div>
          <p className="content">
            Much destination here but don't be confuse! It's already grouped by
            category.
          </p>
        </div>
        <div>
          <button className="btn" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="btn" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="btn-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="slide-item"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: "33.3vw",
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide._id}
            className="single-slide"
            role="button"
            onClick={(e) => handleNavigate(e, slide.name)}
          >
            <img className="img" src={slide.image} alt={slide.name} />
            <h3>{slide.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
