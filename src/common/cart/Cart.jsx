import {useState, useEffect} from "react";
import "./Cart.css";

const Cart = ({ cartItem, addToCart, decreaseqty }) => {
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
<div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        {steps.map(({ step, label }) => (
          <div className="circle">
            {step}. {label}
          </div>
        ))}
      </div>
      <button
        className="btn"
        id="prev"
        disabled={currentActive === 1}
        onClick={previousClick}
      >
        Prev
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



      <section className="cart-items">
       


        <div className="container d_flex">
          {/*if no products in cart*/}
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product"> No items are added in cart</h1>
            )}

            {/*cart ma items xa bhane show garne kam yaha gariraxa*/}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    quantity increase ra decrease garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseqty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalprice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
