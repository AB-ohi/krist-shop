import { Link, useNavigate } from "react-router-dom";
import noteFoundImg from "../../../public/img/404.gif";
import loader from "../../../public/img/loader (1).gif"
import { useState } from "react";
import "./notFound.css"
const NotFound = () => {
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);

const handelBack = () => {
  setLoading(true);
  setTimeout(() => {
    navigate(-1);
  }, 600);
};
  return (
     <div className="NodeFoundFullPage">
      {loading ? (
         <div>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <img style={{ width: "35%" }} src={noteFoundImg} alt="Not Found" />
         
        </div>
        <div style={{display:"flex", justifyContent:'center'}}>
           <img style={{width:"30px"}} src={loader} alt="" />
        
        </div>
        </div>
      ) : (
        <div>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <img style={{ width: "35%" }} src={noteFoundImg} alt="Not Found" />
         
        </div>
        <div 
            className="backBtn">
           <button
            onClick={handelBack}
          >
            Go Back
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default NotFound;
