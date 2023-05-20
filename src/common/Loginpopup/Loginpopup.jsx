import React from "react";
import "./Loginpopup.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CgGoogle } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import { useHistory } from "react-router";

const Loginpopup = ({ loginpopupclose }) => {
  const history = useHistory();

  const changepage = () => {
    history.push("/signup");
  };
  return (
    <div className="loginpopup-container">
      <div className="loginpopoup-items">
        <div className="close">
          <h1 onClick={loginpopupclose}>
            {" "}
            <GrFormClose />{" "}
          </h1>
        </div>
        <div className="intro">
          <h1>Welcome to Epasal</h1>
          <p>Log in with Email & password</p>
        </div>
        <div className="login-form">
          <label>Email or Phone Number</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="button login-button">Login</button>
        <h5>on</h5>
        <button className="button facebook-button">
          <span>
            <RiFacebookCircleLine />
          </span>
          Continue With Facebook
        </button>
        <button className="button google-button">
          <span>
            <CgGoogle />
          </span>
          Continue With Google
        </button>

        <div className="sign-up">
          <label> Don't have accout?</label>{" "}
          <span onClick={changepage}>Sign Up</span>
        </div>

        <div className="forget-pwd">
          <label> Forgot Password?</label>{" "}
          <span>
            <a href="#">Reset It</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loginpopup;
