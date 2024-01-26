const Comment = () =>{
    const CustomarComments=[
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
        {
            customerNamel:'babul',
            comment:'Additionally, if there are specific aspects or products youd like to highlight in the comment, that would be helpful',
            customerPic:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw0jRNPbtzRehQuA41MuQts7&ust=1706361351235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZr8OR-4MDFQAAAAAdAAAAABAD',
            customerRating:'3'
        },
    ]
    return(
        <div>
            <h1></h1>
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
        {CustomarComments.map((Comments, index) => (
          <SwiperSlide key={index + 1} style={{ position: "relative" }}>
            
           
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    )
}

export default Comment;