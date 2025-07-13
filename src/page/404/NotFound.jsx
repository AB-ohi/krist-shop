import { Link, useNavigate } from "react-router-dom";
import noteFoundImg from "../../../public/img/404.gif";
import { useState } from "react";
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
     <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <img style={{ width: "35%" }} src={noteFoundImg} alt="Not Found" />
         
        </div>
         <button
            onClick={handelBack}
            style={{textAlign:'center'}}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default NotFound;
