import { useState } from 'react';
import './BestSeller.css'
import { useEffect } from 'react';

const Bestseller = () => {
    const [menCollections, SetMenCollections] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/men")
        .then(res => res.json())
        .then(data =>SetMenCollections(data))
    },[])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Our Bestseller</h1>
            <div className='best-seller-card-body'>
                {
                    menCollections.map(menCollection=>
                    <div key={menCollection._id}>
                        <img style={{width:'100%', border:'1px solid red'}} src={menCollection.pictureURL} alt="" />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Bestseller;