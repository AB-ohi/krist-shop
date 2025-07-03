import { useParams } from "react-router-dom"

const CategoryProduct = () =>{
    const {category} = useParams();
    console.log(category);
    return(
        <div>
            <h1>Category: {category}</h1>
        </div>
    )
};

export default CategoryProduct;