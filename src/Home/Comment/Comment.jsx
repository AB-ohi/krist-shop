import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from 'react-rating-star-with-type'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Comment = () => {
    const CustomarComments = [
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
        {
            customerNamel: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating: '3'
        },
    ]
    return (
        <div style={{width:'80%', margin:'auto', marginTop:'30px'}}>
            <h1>What our Customer say's</h1>
            <Swiper

                slidesPerView={5}
                spaceBetween={1000}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 80 },
                    480: { slidesPerView: 2, spaceBetween: 50 },
                    768: { slidesPerView: 3, spaceBetween: 50 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ width: "85%", margin: "auto" }}
            >
                {CustomarComments.map((Comments, index) => (
                    <SwiperSlide key={index + 1} style={{ position: "relative" }}>

                        <ReactStars
                            value={Comments.customerRating}
                            edit={true}
                            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Comment;