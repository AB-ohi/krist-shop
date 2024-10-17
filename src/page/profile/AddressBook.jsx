import { useContext, useEffect, useState } from "react";
import './AddressBook.css'
import locationBG from '../../../public/img/locationBG.png'
import emptyAddressPicture from '../../../public/img/emptyAddressPicture.webp'
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import error from "../../../public/img/error.gif"
const AddressBook = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  const [area, setArea] = useState("");
  const [address, setAddress] = useState([]);
  const handleChange = (option) => {
    const selectedArea = option.target.value;
    setArea(selectedArea);
  };
  // const handelChangeThana = (e) => {
  //   setThanas(e.target.value);
  // };

  const handelSubmit = (e) =>{
      e.preventDefault();
      const form = e.target;
      const district = form.area.value;
      const division = form.division.value;
      const homeAddress = form.Home_address.value;
      const number = form.number.value;
      const email = form.email.value;
      const user_name = user.email;
      const addressForm = {district, division, homeAddress, number, email, user_name};
      
      
        fetch('http://localhost:5000/address',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(addressForm)
        })
        .then((res)=>res.json())
        .then(data => {
          if(data){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            Swal.fire({
              imageUrl: error,
              imageHeight: 100,
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        })
      
  }

  useEffect(() => {
    fetch(`http://localhost:5000/addressAPI/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAddress(data);
        } else {
          console.error("Error: No data fetched");
        }
      });
  }, []);

  return (
    <div className="address_body">
        <img className="address_BG" src={locationBG} alt="" />
      
      <form onSubmit={handelSubmit} className="address_input_area">
       <div className="left_input_area">
       <div className="address_input_section">
          <label htmlFor="">Select you district</label>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <select name="area" id="area"  onChange={handleChange} required>
            <option value="">district</option>
            {address.map((division, index) => (
              <option key={index} value={division.value}>
                {division.district}
              </option>
            ))}
          </select>
        </div>
        <div className="address_input_section">
          <label htmlFor="">Your division</label>
          <input type="text" name="division" value={area} readOnly placeholder="division" required/>
        </div>
        <div className="address_input_section">
          <label htmlFor="">Home address</label>
          <input name="Home_address" value={address.thana} id="" placeholder="Your full address"/>
        </div>
        
       </div>
       <div className="right_input_area">
       <div className="address_input_section">
          <label htmlFor="">Add phone number</label>
          <input type="text" name="number" placeholder="phone number" required/>
        </div>
       <div className="address_input_section">
          <label htmlFor="">Add Email</label>
          <input type="email" name="email" placeholder="@_mail.com" required/>
        </div>
        <div className="address_input_section" >
        <input className="submit_button" style={{width:'50%', marginLeft:'50%'}} type="submit" value="Submit your address" />
        </div>
       </div>
      </form>
      
      <div className="address_show_area">
        <p style={{fontSize:'30px'}}>please add your address!</p>
        <img src={emptyAddressPicture} alt="" />
      </div>
    </div>
  );
};

export default AddressBook;
