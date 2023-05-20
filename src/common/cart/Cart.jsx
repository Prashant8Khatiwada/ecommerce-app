import { useState, useEffect } from "react";
import "./Cart.css";
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Cart = ({ cartItem, addToCart, decreaseqty, removeFromCart }) => {
  const totalprice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

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
        ((actives.length - 1) / (circles.length - 1)) * 100
      }%`;
    };

    update();
  }, [currentActive]);

  const steps = [
    {
      label: "Address",
      step: 1,
    },
    {
      label: "Shipping",
      step: 2,
    },
    {
      label: "Payment",
      step: 3,
    },
    {
      label: "Summary",
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
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-item" key={item.id}>
                  {/* =====CART IMG===== */}
                  <img src={item.cover} alt="" className="item-img" />

                  {/* =====CART DETAILS===== */}
                  <div className="item-contents">
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <h5>
                        ${item.price}.00 * {item.qty} =
                        <span> ${productQty}.00</span>
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
                          <FiPlus
                            className="add"
                            onClick={() => addToCart(item)}
                          />
                        </div>

                        <span>{item.qty}</span>

                        {item.qty <= 1 ? ( // Disable button when qty is 1 or less
                          <div className="disable-sub-button">
                            <BiMinus
                              className="sub"
                              onClick={() => decreaseqty(item)}
                            />
                          </div>
                        ) : (
                          <div>
                            <BiMinus
                              className="sub"
                              onClick={() => decreaseqty(item)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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

          <div className="total-price">
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
