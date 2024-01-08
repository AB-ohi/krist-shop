import { useContext } from "react";
import "./Login.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {signIn, user} = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(user)

  const handelLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {password, email};
    console.log(user)

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate('/')
    })
  }

  return (
    <div className="login-main-body">
      <img className="login-page-body" src="../../public/img/logo.svg" alt="" />
      <div className="login-body">
        <div className="login-left">
          <img className="login-img" src="../../public/img/login.png" alt="" />
        </div>
        <div className="login-input">
          <div style={{ marginBottom: "32px" }}>
            <h1 className="login-header">Welcome</h1>
            <p style={{ color: "rgb(168, 168, 168)", margin: "0" }}>
              Please login here
            </p>
          </div>
          <form onSubmit={handelLogin} style={{ width: "60%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">Email Address</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                  marginBottom:'18px'
                }}
                className="import-email"
                type="email"
                name="email"
                placeholder="email"
                id=""
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="password">Password</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                }}
                type="password"
                name="password"
                placeholder="Password"
                id=""
              />
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'10px', marginBottom:'10px'}}>
              <div style={{display:'flex'}}>
                
              <a style={{textDecoration:'none',  color:'black'}} href="/registration">Create New Account</a>
              </div>
              <div>
              <a href="">Forget Password?</a>
              </div>
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
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
