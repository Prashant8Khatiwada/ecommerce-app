import React from "react";
import "./details.css";

function Details() {
  return (
    <div className="shipping-contents">
      <h3>Shipping Address</h3>
      <div className="shipping-form">
        <span>
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Input full name" />
        </span>
        <span>
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="House no. / building / street / area"
          />
        </span>
        <span>
          <label htmlFor="">Mobile Number</label>
          <input type="text" placeholder="Input mobile number" />
        </span>
        <span>
          <label htmlFor="">Landmark (optional)</label>
          <input type="text" placeholder="E.g. beside train station" />
        </span>
        <span>
          <label htmlFor="">Provience</label>
          <input type="text" placeholder="Please choose your provience" />
        </span>
        <span>
          <label htmlFor="">City</label>
          <input
            type="text"
            placeholder="Please choose your city/municipality"
          />
        </span>
        <span>
          <label htmlFor="">Area</label>
          <input type="text" placeholder="Please choose your Area" />
        </span>
      </div>

      {/* <div className="total-price">includes shipping costs</div> */}
    </div>
  );
}

export default Details;
