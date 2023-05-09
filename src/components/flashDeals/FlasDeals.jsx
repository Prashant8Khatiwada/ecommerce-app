import React from "react";
import FlashCard from "./FlashCard";

const FlasDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          {/* step : 3  
        flashcard ma cart ko kam garna ko lagi ya bata props pass gareko
      */}
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlasDeals;
