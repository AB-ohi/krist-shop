import { Link, useLoaderData } from "react-router-dom";
import './Details.css'

const Details = () => {
    const detail = useLoaderData()
    console.log(detail.category)

    return (
        <div className="detailMain">
            <div style={{display:'flex', alignItems:'center', gap:'7px'}}>
                <Link className="linkDeration" to='/' rel="stylesheet">home</Link>
                <samp>{">"}</samp>
                <Link className="linkDeration" to='/shop' rel="stylesheet" >shop</Link>
                <samp>{">"}</samp>
                <p style={{fontSize:'20px'}}>{detail.category}</p>
            </div>
        </div>
    );
};

export default Details;