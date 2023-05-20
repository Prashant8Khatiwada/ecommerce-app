import React from "react";
import "./Logiin.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const changepage = () => {
    history.push("/signup");
  };

  return (
    <>
      <div className="login-conainer">
        <div className="login-title">
          <h1>Welcome to E-pasal! Please login</h1>
          <label>
            New member? <span onClick={changepage}> Register Now </span>{" "}
          </label>
        </div>
        <div className="login-card">
          <div className="login-flex">
            <div className="login-inputs">
              <label>Phone Number or Email</label>
              <input placeholder="Please enter your phone Number or Email" />

              <label>password</label>
              <input placeholder="Please enter your password" />
              <span className="forgrt">forget password?</span>
            </div>
            <div className="login-buttons">
              <button className="loginbuttom">
                <span>LOGIN</span>{" "}
              </button>
              <label>or, login with </label>
              <div className="buttonitems">
                <button className="facebookbuttom">
                  {" "}
                  <i>
                    <FaFacebookF size={20} className="Facebook" />
                  </i>{" "}
                  <span>Facebook</span>{" "}
                </button>
                <button className="googlebuttom">
                  {" "}
                  <i>
                    <FaGoogle size={20} className="Google" />
                  </i>{" "}
                  <span>Google</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
