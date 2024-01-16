// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Categories.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const wearPic = [
  {
    img: "../../../public/wearPic/Athleisure.jpg",
    name: "Athleisure",
    link: "https://example.com/page1",
  },
  {
    img: "../../../public/wearPic/banglaSari.jpg",
    name: "Sari",
    link: "https://example.com/page2",
  },
  {
    img: "../../../public/wearPic/Bohemian.jpg",
    name: "Bohemian",
    link: "https://example.com/page3",
  },
  {
    img: "../../../public/wearPic/casual.jpg",
    name: "Casual",
    link: "https://example.com/page3",
  },
  {
    img: "../../../public/wearPic/ethnic.jpg",
    name: "Ethnic",
    link: "https://example.com/page1",
  },
  {
    img: "../../../public/wearPic/Formal.jpg",
    name: "Formal",
    link: "https://example.com/page2",
  },
  {
    img: "../../../public/wearPic/kids.jpg",
    name: "Kids",
    link: "https://example.com/page3",
  },
  {
    img: "../../../public/wearPic/Streetwear.jpg",
    name: "Street",
    link: "https://example.com/page3",
  },
];
const Categories = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Shop by Categories
      </h1>
      <Swiper
      
        slidesPerView={5}
        spaceBetween={1000}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 80 },
          480: { slidesPerView: 3, spaceBetween: 50 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "85%", margin: "auto" }}
      >
        {wearPic.map((wear, index) => (
          <SwiperSlide key={index + 1} style={{ position: "relative" }}>
            <img
              className="wear-img"
              style={{ zIndex: "10", borderRadius:'11px' }}
              src={wear.img}
              alt=""
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  zIndex: "1",
                  position: "absolute",
                  bottom: "50px",
                  width: "90%",
                }}
              >
                <Link
                  to=""
                  style={{
                    padding: "10px 0",
                    width: "100%",
                    backgroundColor: "white",
                    cursor: "pointer",
                    borderRadius: "11px",
                  }}
                >
                  {" "}
                  <button
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      fontSize: "18px",
                    }}
                  >
                    {wear.name} wear
                  </button>{" "}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
