const SelleCard = ({pictureURL,productName,nickname,price}) => {
    // const {pictureURL,productName,nickname,price }= props;
    const originalPrice = price;
    console.log(originalPrice)
    const discountPrice = parseInt(originalPrice - (originalPrice * 0.3))
    
    console.log(discountPrice)

    return (
        <div className="product-cart">
            <img
                style={{ width: "100%" }}
                src={pictureURL}
                alt=""
            />
            <h1 style={{ margin: "0" }}>{productName}</h1>
            <p style={{ margin: "0" }}>{nickname}</p>
            <div>
                <p>{discountPrice}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}
export default SelleCard;