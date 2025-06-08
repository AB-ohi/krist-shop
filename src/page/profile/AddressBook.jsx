import { useContext } from "react";
import "./AddressBook.css";
import locationBG from "../../../public/img/locationBG.png";
import emptyAddressPicture from "../../../public/img/emptyAddressPicture.webp";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import useAddress from "../../Hook/addressHook";
const AddressBook = () => {
  const { user } = useContext(AuthContext);
  const { addressList } = useAddress();
  const handelDelete = (addr) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = fetch (`http://localhost:5000/address/${addr._id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const district = form.area.value;
    const division = form.division.value;
    const homeAddress = form.Home_address.value;
    const number = form.number.value;
    const email = form.email.value;
    const user_name = user.email;
    const addressForm = {
      district,
      division,
      homeAddress,
      number,
      email,
      user_name,
    };

    fetch("http://localhost:5000/address", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addressForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            imageUrl: "error",
            imageHeight: 100,
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/addressAPI`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         setAddress(data);
  //       } else {
  //         console.error("Error: No data fetched");
  //       }
  //     });
  // }, []);

  return (
    <div className="address_body">
      <img className="address_BG" src={locationBG} alt="" />

      <form onSubmit={handelSubmit} className="address_input_area">
        <div className="left_input_area">
          <div className="address_input_section">
            <label htmlFor="">Select you district</label>
            <input
              name="area"
              id="area"
              placeholder="district"
              required
            ></input>
          </div>
          <div className="address_input_section">
            <label htmlFor="">Your division</label>
            <input
              type="text"
              name="division"
              placeholder="division"
              required
            />
          </div>
          <div className="address_input_section">
            <label htmlFor="">Home address</label>
            <input name="Home_address" id="" placeholder="Your full address" />
          </div>
        </div>
        <div className="right_input_area">
          <div className="address_input_section">
            <label htmlFor="">Add phone number</label>
            <input
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
              name="number"
              placeholder="phone number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
              required
            />
          </div>
          <div className="address_input_section">
            <label htmlFor="">Add Email</label>
            <input
              type="email"
              name="email"
              placeholder="@_mail.com"
              required
            />
          </div>
          <div className="address_input_section">
            <input
              className="submit_button"
              style={{  marginTop:'23px'}}
              type="submit"
              value="Submit your address"
            />
          </div>
        </div>
      </form>

      <div className="address_show_area">
        {addressList.length === 0 ? (
          <>
            <p style={{ fontSize: "30px" }}>Please add your address!</p>
            <img src={emptyAddressPicture} alt="No address" />
          </>
        ) : (
          <div>
            <>
              <p style={{ fontSize: "25px", marginBottom: "15px" }}>
                address list
              </p>
              <div
                style={{
                  height: "600px",
                  overflow: "scroll",
                  scrollbarWidth: "none",
                }}
              >
                {addressList.map((addr, index) => (
                  <div key={index}>
                    <div className="addressList">
                      <button
                        onClick={() => handelDelete(addr)}
                        style={{
                          background: "none",
                          border: "none",
                          position: "absolute",
                          bottom: "1px",
                          right: "0",
                          fontSize: "30px",
                          color: "rgb(167, 74, 253)",
                          cursor: "pointer",
                        }}
                      >
                        <MdDeleteForever />
                      </button>
                      <p>
                        <strong>District:</strong> {addr.district}
                      </p>
                      <p>
                        <strong>Division:</strong> {addr.division}
                      </p>
                      <p>
                        <strong>Home Address:</strong> {addr.homeAddress}
                      </p>
                      <p>
                        <strong>Phone Number:</strong> {addr.number}
                      </p>
                      <p>
                        <strong>Email:</strong> {addr.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressBook;
