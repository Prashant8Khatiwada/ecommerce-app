import React from "react";
import "./Signup.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <>
      <div className="signup-conainer">
        <div className="signup-title">
          <h1>Create your Account on E-pasal</h1>
          <label>
            Already a member? <span> Login here </span>{" "}
          </label>
        </div>
        <div className="signup-card">
          <div className="signup-flex">
            <div className="signup-inputs">
              <label>Phone Number or Email</label>
              <input placeholder="Please enter your phone Number or Email" />

              <label>password</label>
              <input placeholder="Please enter your password" />
              <span className="forgrt">forget password?</span>

              <label>Date of birth</label>
              <input placeholder="Please enter your password" type="date" />
            </div>

            <div className="signup-buttons">
              <div className="next-inputs">
                <label>Full Name</label>
                <input placeholder="Please enter your full name" />

                <div className="signup-checkbox">
                  <input type="checkbox" />
                  <label> I'd like to receive exclusive offers via SMS </label>
                </div>
              </div>

              <button className="signupbuttom">
                <span>signup</span>{" "}
              </button>
              <label>or, signup with </label>
              <div className="buttonitems">
                <button className="signup-facebookbuttom">
                  {" "}
                  <i>
                    <FaFacebookF size={20} className="Facebook" />
                  </i>{" "}
                  <span>Facebook</span>{" "}
                </button>
                <button className="signup-googlebuttom">
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

export default Signup;
