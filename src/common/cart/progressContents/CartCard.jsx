import React from "react";
import "./cartCard.css";
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function CartCard({
  item,
  productQty,
  addToCart,
  decreaseqty,
  cartItem,
  setCardItems,
}) {
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItem.filter((item) => item.id !== itemId);
    setCardItems(updatedCartItems);
  };

  return (
    <div className="cart-item" key={item.id}>
      {/* =====CART IMG===== */}
      <img src={item.cover} alt="" className="item-img" />

      {/* =====CART DETAILS===== */}
      <div className="item-contents">
        <div className="item-details">
          <h3>{item.name}</h3>
          <h5>
            ${item.price}.00 * {item.qty} =<span> ${productQty}.00</span>
          </h5>
        </div>
        {/* =====CART CONTROLS===== */}
        <div className="item-control">
          <div className="remove">
            <RxCross2
              onClick={() => removeFromCart(item.id)} // Call removeFromCart function with item id
            />
          </div>
          <div className="handle-item">
            <div>
              <FiPlus className="add" onClick={() => addToCart(item)} />
            </div>

            <span>{item.qty}</span>

            {item.qty <= 1 ? ( // Disable button when qty is 1 or less
              <div className="disable-sub-button">
                <BiMinus className="sub" />
              </div>
            ) : (
              <div>
                <BiMinus className="sub" onClick={() => decreaseqty(item)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
