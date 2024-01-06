import './Sign.css'
const SignUp = () => {
    return (
        <div className="registration-main-body">
      <img className="registration-page-body" src="../../public/img/logo.svg" alt="" />
      <div className="registration-body">
        <div className="registration-left">
          <img className="registration-img" src="../../public/img/singup.png" alt="" />
        </div>
        <div className="registration-input">
          <div style={{ marginBottom: "32px" }}>
            <h1 className="registration-header">Create New Account</h1>
            <p style={{ color: "rgb(168, 168, 168)", margin: "0" }}>
            Please enter details
            </p>
          </div>
          <form style={{ width: "60%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">First Name</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                  marginBottom:'18px'
                }}
                className="import-email"
                type="text"
                name="firstName"
                placeholder=""
                id=""
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">Last Name</label>
              <input
                style={{
                  padding: "16px",
                  border: "1px solid #131118",
                  outline: "none",
                  borderRadius: "10px",
                  marginBottom:'18px'
                }}
                className="import-email"
                type="text"
                name="lastName"
                placeholder=""
                id=""
              />
            </div>
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
              <div style={{display:'flex'}}>
                <input
                  type="checkbox"
                  name="remember"
                  id=""
                  style={{ background: "#131118" }}
                />
                <p>I agree to the <span style={{fontWeight: '700',}}>Terms & Conditions</span></p>
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