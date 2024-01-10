import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn, CiFacebook, CiInstagram } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#131118" }}>
      <div className="footer-body">
        <div>
          <img src="../../../public/img/wLogo.png" alt="" />
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FiPhoneCall style={{ fontSize: "25px" }} />
            (+880) 1855240429
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TfiEmail style={{ fontSize: "25px" }} />
            krist@shop.com
          </p>
          <p style={{ display: "flex", gap: "10px" }}>
            <CiLocationOn style={{ fontSize: "25px" }} />
            <span style={{ width: "210px" }}>
              {" "}
              Uttora-12, road-18, house-24 Dhaka, Bangladesh
            </span>
          </p>
        </div>
        <div>
          <table className="table-body">
            <tr className="table-row">
              <th>Information</th>
              <th>service</th>
            </tr>
            <tr className="table-row">
              <td>My Account</td>
              <td>About Us</td>
            </tr>
            <tr className="table-row">
              <td>Login</td>
              <td>Careers</td>
            </tr>
            <tr className="table-row">
              <td>My Cart</td>
              <td>Delivery Information</td>
            </tr>
            <tr className="table-row">
              <td>My Wishlist</td>
              <td>Privet Police</td>
            </tr>
            <tr className="table-row">
              <td>Checkout</td>
              <td>Terms & condition</td>
            </tr>
          </table>
        </div>
        <div>
          <h3 style={{ marginTop: "0" }}>Subscribe</h3>
          <p style={{ width: "320px" }}>
            Enter your email Below to be the first to know about new collection
            and product launches.
          </p>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              color: "white",
              border: "1px white solid",
              padding: "15px",
              borderRadius: "10px",
            }}
            href="mailto:abc@example.com"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <TfiEmail style={{ fontSize: "25px", margin: "0 10px 0 0" }} />{" "}
              Your Email
            </div>{" "}
            <div>
              <FaArrowRight />
            </div>{" "}
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "1px",
          width: "80%",
          margin: "auto",
        }}
      ></div>
      <div className="footer-last">
        <div>
          <img
            src="../../../public/img/footerImg.png"
            style={{ width: "50px" }}
            alt=""
          />
        </div>
        <div>
          <p>2024 Krist All Right are reserved</p>
        </div>
        <div>
          <CiFacebook style={{ fontSize: "30px", marginRight: "10px" }} />
          <CiInstagram style={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
