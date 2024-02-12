const SelleCard = ({pictureURL,productName,nickname,price}) => {
    // const {pictureURL,productName,nickname,price }= props;
    const originalPrice = price;
    console.log(originalPrice)
    const discountPrice = originalPrice - (originalPrice * 0.01)
    console.log(discountPrice)

    return (
        <div>
           
        </div>
    )
}
export default SelleCard;