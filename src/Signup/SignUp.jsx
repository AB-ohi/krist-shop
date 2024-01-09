import { useContext, useState } from "react";
import "./Sign.css";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handelOnCreateUSer = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.firstName.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/login");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="registration-main-body">
      <img
        className="registration-page-body"
        src="../../public/img/logo.svg"
        alt=""
      />
      <div className="registration-body">
        <div className="registration-left">
          <img
            className="registration-img"
            src="../../public/img/singup.png"
            alt=""
          />
        </div>
        <div className="registration-input">
          <div style={{ marginBottom: "32px" }}>
            <h1 className="registration-header">Create New Account</h1>
            <p style={{ color: "rgb(168, 168, 168)", margin: "0" }}>
              Please enter details
            </p>
          </div>
          <form onSubmit={handelOnCreateUSer} style={{ width: "50%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="email">First Name</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                  marginBottom: "18px",
                }}
                className="import-email"
                type="text"
                name="firstName"
                placeholder=""
                id=""
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", width:'100%' }}>
              <label htmlFor="email">Last Name</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                  marginBottom: "18px",
                }}
                className="import-email"
                type="text"
                name="lastName"
                placeholder=""
                id=""
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", width:'100%' }}>
              <label htmlFor="email">Email Address</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                  marginBottom: "18px",
                }}
                className="import-email"
                type="email"
                name="email"
                placeholder="email"
                id=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="password">Password</label>
              
                <div style={{display:'flex', alignItems:"center"}}>
                <input
                  style={{
                    padding: "16px",
                    border: "1px solid #131118",
                    outline: "none",
                    borderRadius: "10px",
                    width:'100%'
                  }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  id=""
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <BiSolidHide style={{ marginLeft: "-27px" }} />
                  ) : (
                    <BiSolidShow style={{ marginLeft: "-27px" }} />
                  )}
                </span>
              
                </div>
            </div>
            <div style={{margin:'10px 0'}}>
              <Link to='/login' style={{color:"black", textDecoration:'none', }}>Already have an account !</Link>
            </div>
            <input
              style={{
                width: "100%",
                background: "#131118",
                color: "rgba(255, 255, 255, 1)",
                border: "none",
                padding: "20px 0",
                borderRadius: "10px",
              }}
              type="submit"
              value="Signup"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
