import React from "react";
import "./details.css";

function Details() {
  return (
    <div className="shipping-contents">
      <h3>Shipping Address</h3>
      <hr />
      <div className="shipping-fill">
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
            <label htmlFor="">Province</label>
            <select>
              <option value="">Please choose your province</option>
              <option value="province1">Koshi Provience</option>
              <option value="province2">Madhesh Provience</option>
              <option value="province3">Bagmati Provience</option>
              <option value="province4">Gandaki Provience</option>
              <option value="province5">Lumbini Provience</option>
              <option value="province6">Sudurpashchim Provience</option>
              {/* Add more options for other provinces */}
            </select>
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
        <div className="save-container">
          <button className="save">Save</button>
        </div>
      </div>

      {/* <div className="total-price">includes shipping costs</div> */}
    </div>
  );
}

export default Details;
