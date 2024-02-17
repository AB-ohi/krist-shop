const SelleCard = ({pictureURL,productName,nickname,price}) => {
    // const {pictureURL,productName,nickname,price }= props;
    const originalPrice = price;
    console.log(originalPrice)
    const discountPrice = parseInt(originalPrice - (originalPrice * 0.3))
    
    console.log(discountPrice)

    return (
        <div className="product-cart">
            <div style={{position:'relative'}}>
                <p style={{zIndex:'10', position:'absolute',backgroundColor:'red', color:'white', padding:'5px 8px'}}>30%</p>
            <img
                style={{ width: "100%", zIndex:'1' }}
                src={pictureURL}
                alt=""
            />
            </div>
            <h1 style={{ margin: "0" }}>{productName}</h1>
            <p style={{ margin: "0" }}>{nickname}</p>
            <div>
                <p>Discount price: {discountPrice}</p>
                <p>Price: <span style={{color:'rgb(196, 196, 196)'}}>{price}</span></p>
            </div>
        </div>
    )
}
export default SelleCard;