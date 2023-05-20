import React from "react";
import { Link } from "react-router-dom";
import "./cartpopup.css";
import { HiShoppingBag } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
function CartPopUp({
  cartpopupclose,
  decreaseqty,
  cartItem,
  setCardItems,
  increaseqty,
}) {
  const totalprice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItem.filter((item) => item.id !== itemId);
    setCardItems(updatedCartItems);
  };

  return (
    <div className="cart-popup">
      <div className="cart-popup-left" onClick={cartpopupclose}></div>

      <div className="cart-popup-right">
        <div className="itemsnum">
          <span className="cart-icon">
            <HiShoppingBag />{" "}
          </span>
          {/* {shows number of cart items} */}

          <span className="cart-num">3 Items</span>
        </div>
        <hr />

        {cartItem.map((item) => {
          const productQty = item.price * item.qty;
          return (
            <div className="cart-popup-items" key={item.id}>
              <div className="cart-item-manage">
                <div>
                  <FiPlus className="plus" onClick={() => increaseqty(item)} />
                </div>

                <span>{item.qty}</span>

                {item.qty <= 1 ? ( // Disable button when qty is 1 or less
                  <div className="disable-minus-button">
                    <BiMinus className="minus" />
                  </div>
                ) : (
                  <div>
                    <BiMinus
                      className="minus"
                      onClick={() => decreaseqty(item)}
                    />
                  </div>
                )}
              </div>
              <div className="cart-image">
                <img src={item.cover} alt="cartimg" />
              </div>
              <div className="cart-details">
                <label>{item.name}</label>
                <p>
                  ${item.price}.00 * {item.qty}
                </p>
                <h4>${productQty}.00</h4>
              </div>
              <div>
                <RxCross2
                  className="cross"
                  onClick={() => removeFromCart(item.id)} // Call removeFromCart function with item id
                />
              </div>
            </div>
          );
        })}
        {/* cart items displaying section ends  */}

        <div className="view-cart">
          <Link to="./Cart">
            <button className="checkout" onClick={cartpopupclose}>
              Checkout Now
            </button>
            <button className="view" onClick={cartpopupclose}>
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPopUp;
