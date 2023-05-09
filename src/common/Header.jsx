import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";

export const Header = ({
  cartItem,
  addToCart,
  decreaseqty,
  setCardItems,
  increaseqty,
}) => {
  /* to show the items added in cart icon on header */
  return (
    <>
      <Head />
      <Search
        increaseqty={increaseqty}
        cartItem={cartItem}
        addToCart={addToCart}
        decreaseqty={decreaseqty}
        setCardItems={setCardItems}
      />
      <Navbar />
    </>
  );
};
