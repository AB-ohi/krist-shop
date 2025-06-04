// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Categories.css";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const wearPic = [
  {
    img: "../../../public/wearPic/casual.jpg",
    name: "Men",
    link: "https://example.com/page1",
  },
  {
    img: "../../../public/wearPic/ethnic.jpg",
    name: "Women",
    link: "https://example.com/page2",
  },
  {
    img: "../../../public/wearPic/foot.png",
    name: "Foot",
    link: "https://example.com/page3",
  },
  {
    img: "../../../public/wearPic/banglaSari.jpg",
    name: "Bengali",
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
          <SwiperSlide key={index + 1}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                zIndex: 1000,
                type: "spring",
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ position: "relative" }}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  zIndex: 1000,
                  type: "spring",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="wear-img"
                style={{
                  borderRadius: "11px",
                  width: "100%",
                  position: "relative",
                  margin: "30px",
                }}
                src={wear.img}
                alt=""
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    zIndex: "1",
                    position: "absolute",
                    bottom: "60px",
                    width: "90%",
                    left: "68%",
                    transform: "translateX(-50%)",
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
                    <button
                      style={{
                        width: "90%",
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                        fontSize: "80%",
                        margin: "auto",
                      }}
                    >
                      {wear.name} wear
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
