import { Link, useLoaderData } from "react-router-dom";
import './Details.css'
import ReactStars from 'react-rating-star-with-type'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


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
                <div style={{display:'flex', gap:'10px'}}>
                <ReactStars
                            value={detail.rating}
                            edit={true}
                            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                        />
                        <p>{detail.rating}</p>
                </div>
            </div>
            </div>
            <div>
            <Tabs>
    <TabList style={{display:'flex'}}>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default Details;