import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./Details.css";
import ReactStars from "react-rating-star-with-type";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import DetailOfProduct from "../../component/Details/DetailOfproduct";

const Details = () => {
  const detail = useLoaderData();
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);
  console.log(detail);
  const handelBack = () => {
    isLoading(true);
    setTimeout(() => {
      navigate(-1);
    },600);
  };

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? detail.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === detail.images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div  className="detailMain">
      {loading ? (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src="../../public/img/loading.gif" alt="" />
      </div>
      ) : (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <Link className="linkDeration" to="/" rel="stylesheet">
              home
            </Link>
            <samp>{">"}</samp>
            {loading ? (
              <div></div>
            ) : (
              <Link
                className="linkDeration"
                onClick={handelBack}
                rel="stylesheet"
              >
                shop
              </Link>
            )}
            <samp>{">"}</samp>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "rgb(92, 92, 92)",
              }}
            >
              {detail.category}
            </p>
          </div>
          <div className="detailMainBody">
            <div className="carouselContainer">
              <div className="carouselImageWrapper">
                <img
                  src={detail.images[current]}
                  alt={`carousel-${current}`}
                  className="carouselImage"
                />
                <button className="navButton left" onClick={handlePrev}>
                  ❮
                </button>
                <button className="navButton right" onClick={handleNext}>
                  ❯
                </button>
              </div>
              <div className="dotContainer">
                {detail?.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === current ? "active" : ""}`}
                    onClick={() => setCurrent(idx)}
                  ></span>
                ))}
              </div>
            </div>
           <DetailOfProduct detail={detail}/>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
