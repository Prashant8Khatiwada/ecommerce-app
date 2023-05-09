import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container">
          <div className="left">
            <span className="icon">
              <BsTelephoneFill />
            </span>
            <label> +9866590393 </label>
            <span className="icon">
              <RxEnvelopeClosed />
            </span>
            <label> info@Epasal.com</label>
          </div>

          <div className="right">
            <label> Theme FAQ's</label>
            <label> Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
