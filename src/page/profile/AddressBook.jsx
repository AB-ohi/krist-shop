import { useContext, useEffect, useState } from "react";
import './AddressBook.css'
import locationBG from '../../../public/img/locationBG.png'
import emptyAddressPicture from '../../../public/img/emptyAddressPicture.webp'
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import error from "../../../public/img/error.gif"
import { MdDeleteForever } from "react-icons/md";
const AddressBook = () => {
  const {user} = useContext(AuthContext)
  const [area, setArea] = useState("");
  console.log(area)
  const [address, setAddress] = useState([]);
  const [addressList, setAddressList] = useState()
  const [district, setDistrict] = useState()
  console.log(district)
  const handleChange = (option) => {
    const selectedArea = option.target.value;
    setArea(selectedArea);
  };
  useEffect(() => {
    if (address && area) {
      const areaFilter = address.find((addr) => addr.value === area);
      setDistrict(areaFilter ? areaFilter.district : "");
    }
  }, [area, address]);

  // const handelDistrictValueSet= (e) => {
  //   setDistrict(e.target.area.value);
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
      const addressForm = {district,division,  homeAddress, number, email, user_name};
      console.log(addressForm)
      
      
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
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            window.location.reload()
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
    if (user && user.email) {
      fetch('http://localhost:5000/address')
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const filterAddressList = data.filter((addressList)=>addressList.user_name === user.email)
            setAddressList(filterAddressList)
          } else {
            console.error("Error: No data fetched");
          }
        })
        .catch(err => console.error("Error fetching address", err));
    }
  }, [user]);

  useEffect(() => {
    fetch(`http://localhost:5000/addressAPI`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAddress(data);
        } else {
          console.error("Error: No data fetched");
        }
      });
  }, [user]);

  return (
    <div className="address_body">
        <img className="address_BG" src={locationBG} alt="" />
      
      <form onSubmit={handelSubmit} className="address_input_area">
       <div className="left_input_area">
       <div className="address_input_section">
          <label htmlFor="">Select you district</label>
          <input name="area"  id="area" placeholder="district" onChange={handleChange} required>
            
          </input>
        </div>
        <div className="address_input_section">
          <label htmlFor="">Your division</label>
          <input type="text" name="division"  placeholder="division" required/>
        </div>
        <div className="address_input_section">
          <label htmlFor="">Home address</label>
          <input name="Home_address" id="" placeholder="Your full address"/>
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
  {addressList ? 
    <div>
      <p style={{fontSize:'25px', marginBottom:'15px'}}>address list</p>
    <div style={{height:'600px', overflow:'scroll',scrollbarWidth:'none'}}>
    { addressList.map((addr, index) => (
      <div key={index}>
        <div className="addressList">
          <button style={{background:'none', border:'none', position:'absolute', bottom:'1px', right:'0', fontSize:'30px', color:'rgb(167, 74, 253)', cursor:'pointer'}}><MdDeleteForever /></button>
        <p><strong>District:</strong> {addr.district}</p>
        <p><strong>Division:</strong> {addr.division}</p>
        <p><strong>Home Address:</strong> {addr.homeAddress}</p>
        <p><strong>Phone Number:</strong> {addr.number}</p>
        <p><strong>Email:</strong> {addr.email}</p>
      </div>
      </div>
    ))}
    </div>
    </div>
   : 
    <>
      <p style={{fontSize: '30px'}}>Please add your address!</p>
      <img src={emptyAddressPicture} alt="No address" />
    </>
  }
</div>
    </div>
  );
};

export default AddressBook;
