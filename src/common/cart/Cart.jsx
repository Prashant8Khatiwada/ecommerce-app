import { useState, useEffect } from "react";
import "./Cart.css";
import CartCard from "./progressContents/CartCard";
import Details from "./progressContents/Details";

const Cart = ({ cartItem, addToCart, decreaseqty, setCardItems }) => {
  const totalprice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItem.filter((item) => item.id !== itemId);
    setCardItems(updatedCartItems);
  };

  // ========== FOR PROGRESS STEP ===========
  const [currentActive, setCurrentActive] = useState(1);

  const nextClick = () => {
    setCurrentActive((prevActive) => {
      let nextActive = prevActive + 1;
      if (nextActive >= 5) {
        nextActive = 5;
      }
      return nextActive;
    });
  };

  const previousClick = (e) => {
    e.preventDefault();
    setCurrentActive((prevActive) => {
      let updatedActive = prevActive - 1;
      if (updatedActive < 1) {
        updatedActive = 1;
      }
      return updatedActive;
    });
  };

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const progress = document.getElementById("progress");

    const update = () => {
      circles.forEach((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
      const actives = document.querySelectorAll(".active");
      progress.style.width = `${
        ((actives.length - 2) / (circles.length - 1)) * 100
      }%`;
    };

    update();
  }, [currentActive]);

  const steps = [
    {
      label: "Cart",
      step: 1,
    },
    {
      label: "Details",
      step: 2,
    },
    {
      label: "Review",
      step: 4,
    },
  ];

  return (
    <>
      {/* ========== FOR PROGRESS STEP =========== */}
      <div className="cart-container">
        <div className="progress-container">
          <div className="progress" id="progress"></div>
          {steps.map(({ step, label }) => (
            <div className="circle">
              {step}. {label}
            </div>
          ))}
        </div>

        <section className="cart-function">
          {/*if no products in cart*/}
          {cartItem.length === 0 && (
            <h1 className="no-items "> No items are added in cart</h1>
          )}

          {/*cart ma items xa bhane show garne kam yaha gariraxa*/}
          <div className="cart-items">
            {cartItem.length > 0 && currentActive === 1 && (
              <div className="cart-itemss">
                {cartItem.map((item) => {
                  const productQty = item.price * item.qty;

                  return (
                    <CartCard
                      item={item}
                      productQty={productQty}
                      addToCart={addToCart}
                      decreaseqty={decreaseqty}
                      cartItem={cartItem}
                      setCardItems={setCardItems}
                    />
                  );
                })}
              </div>
            )}

            {/*if cartItem exists and currentActive is 2*/}
            {cartItem.length > 0 && currentActive === 2 && (
              <Details totalprice={totalprice} />
            )}

            <button
              className="btn"
              id="prev"
              disabled={currentActive === 1}
              onClick={previousClick}
            >
              Previous
            </button>
            <button
              className="btn"
              id="next"
              disabled={currentActive === 4}
              onClick={nextClick}
            >
              Next
            </button>
          </div>

          <div
            className="total-price"
            style={{ display: currentActive > 1 && "none" }}
          >
            <div className="header">
              <h2>Cart Summary</h2>
              <hr />
            </div>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h4>${totalprice}.00</h4>
            </div>
            <div className="comment">
              <span>Additional comment</span>
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
            </div>
            <button className="checkout">Checkout Now</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
