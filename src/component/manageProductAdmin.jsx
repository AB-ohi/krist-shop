import allProductHook from "../Hook/allProductHook"

const ManageProductAdmin=()=>{
    const allProducts = allProductHook()
    console.log(allProducts)
    return(
        <div>
             {
                allProducts?.map((allProduct) =>{
                   return ( <div key={allProduct._id}>
                        <img src={allProduct.images?.[0]} alt="" />
                    </div>)
                })
             }
        </div>
    )
}

export default ManageProductAdmin;