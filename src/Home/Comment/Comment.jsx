/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from 'react-rating-star-with-type'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Comment = () => {
    const CustomerComments = [
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
            customerRating: '3'
        },
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://wallpapers.com/images/high/cool-profile-picture-qej7j2ekuor93ss7.webp',
            customerRating: '3'
        },
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://wallpapers.com/images/high/cool-profile-picture-yxroqlz004j409pm.webp',
            customerRating: '3'
        },
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://wallpapers.com/images/high/cool-profile-picture-pjbik82u4xgo4i88.webp',
            customerRating: '3'
        },
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw',
            customerRating: '3'
        },
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic: 'https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp',
            customerRating: '3'
        },
        {
            customerName: 'babul',
            comment: 'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
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
                {CustomerComments.map((Comments, index) => (
                    <SwiperSlide key={index + 1} style={{ position: "relative" }}>

                        <ReactStars
                            value={Comments.customerRating}
                            edit={true}
                            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                        />
                        <div>
                            <p>{Comments.comment}</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img style={{width:'50px', height:'50px', borderRadius:'50%'}} src={Comments.customerPic} alt="" />
                            <div>
                                <p>{Comments.customerName}</p>
                                <p>{}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Comment;