import { useLoaderData, useParams } from "react-router-dom"
import "./CategoryProduct.css"

const CategoryProduct = () =>{
    const {category} = useParams();
    const products = useLoaderData();
    return(
        <div  style={{width:"80%"}}>
            <h1>Category: {category}</h1>
            <div  style={{height:'100vh', overflowX:'auto', display: "grid", gridTemplateColumns:' repeat(3, 1fr)', gap:'10px', margin:'20px'}}>
                {
                    products?.map((product)=>{
                        return(
                            <div className="shopDisplayProductCard" key={product._id}>
                                <div className="shopDisplayProductImg">
                                    <img style={{width:'100%'}} src={product.images[0]} alt="" />
                                </div>
                                <div>
                                <h2 style={{fontSize:'15px'}}>{product.product_name}</h2>

                                {
                                    product?.discount > 0 ?(
                                        <div>
                                            <p>{product.main_price} ৳</p>
                                            <p>{product.discount}%</p>
                                            <p>{product.discount_price}</p>
                                        </div>
                                    ):(
                                        <div></div>
                                    )
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default CategoryProduct;