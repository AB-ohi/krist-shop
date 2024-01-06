import "./Login.css";
const Login = () => {
  return (
    <div className="login-main-body">
      <img className="login-page-body" src="../../public/img/logo.svg" alt="" />
      <div className="login-body">
        <div className="login-left">
          <img className="login-img" src="../../public/img/login.png" alt="" />
        </div>
        <div className="login-input">
          <div style={{marginBottom:"32px"}}>
            <h1 className="login-header">Welcome</h1>
            <p style={{ color: "rgb(168, 168, 168)", margin: "0" }}>
              Please login here
            </p>
          </div>
          <form>
            <div style={{display:'flex', flexDirection:'column'}}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="email" id="" />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" id="" />
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
