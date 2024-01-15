// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Categories.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
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
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "85%", margin: "auto" }}
      >
        {wearPic.map((wear, index) => (
          <SwiperSlide key={index + 1} style={{position:'relative'}}>
            <img className="wear-img" style={{zIndex:'10'}} src={wear.img} alt="" />
            <div style={{ zIndex:'1', position:'absolute', bottom:'50px', width:'90%', }}>
              <button style={{ width: "100%"}}>{wear.name} wear</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
