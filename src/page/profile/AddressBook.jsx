import { useEffect, useState } from "react";
import './AddressBook.css'
import locationBG from '../../../public/img/locationBG.png'
import emptyAddressPicture from '../../../public/img/emptyAddressPicture.webp'
const AddressBook = () => {
  const [area, setArea] = useState("");
  // const [thanas, setThanas] = useState([]);
  // console.log(thanas)
  const [address, setAddress] = useState([]);
  const handleChange = (option) => {
    const selectedArea = option.target.value;
    setArea(selectedArea);
    // const selectedDistrict = address.find(
    //   (district)=> district.district === selectedArea
    // )
    // if(selectedDistrict){
    //   setThanas(selectedDistrict.thana)
    // }
  };
  // const handelChangeThana = (e) => {
  //   setThanas(e.target.value);
  // };

  // const handelSubmit = (e) =>{
  //     e.preventDefault();
  //     alert(Village/Area/Locality: ${area});
  // }

  useEffect(() => {
    fetch("http://localhost:5000/addressAPI")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
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
      
      <form className="address_input_area">
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
