import { Link, useLoaderData } from "react-router-dom";
import './Details.css'

const Details = () => {
    const detail = useLoaderData()
    console.log(detail)

    return (
        <div className="detailMain">
            <div style={{display:'flex', alignItems:'center', gap:'7px'}}>
                <Link className="linkDeration" to='/' rel="stylesheet">home</Link>
                <samp>{">"}</samp>
                <Link className="linkDeration" to='/shop' rel="stylesheet" >shop</Link>
                <samp>{">"}</samp>
                <p style={{fontSize:'20px', fontWeight:'700', color:'rgb(92, 92, 92)'}}>{detail.category}</p>
            </div>
            <div className="detailMainBody">
            <div className="detailImg">
                <img style={{width:'100%'}} src={detail.pictureURL} alt="" />
            </div>
            <div className="detailAria">
                <p style={{fontSize:'42px', fontWeight:'700', marginBottom:'10px'}}>{detail.productName}</p>
                <p style={{fontSize:'20px'}}>{detail.nickname}</p>
            </div>
            </div>
        </div>
    );
};

export default Details;